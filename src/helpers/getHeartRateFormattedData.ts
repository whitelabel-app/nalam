interface HeartRateData {
    value: number;
    time: string;
}

interface UserInfo {
    gender: 'MALE' | 'FEMALE';
    age: number;
    rhr: number;
}
interface HeartRateRange {
    min: number;
    max: number;
}
interface HeartRateZonesRanges {
    moderate: HeartRateRange;
    vigorous: HeartRateRange;
    peak: HeartRateRange;
}

function getHeartRateZonesRanges(userInfo: UserInfo): HeartRateZonesRanges {
    const { age, rhr, gender } = userInfo;
    const maxHr = gender === 'MALE' ? 220 - age : 206 - 0.88 * age;
    const hrr = maxHr - rhr;
    return {
        moderate: {
            min: Math.floor(hrr * 0.5 + rhr),
            max: Math.floor(hrr * 0.69 + rhr),
        },
        vigorous: {
            min: Math.floor(hrr * 0.7 + rhr),
            max: Math.floor(hrr * 0.84 + rhr),
        },
        peak: {
            min: Math.floor(hrr * 0.85 + rhr),
            max: Math.floor(maxHr),
        },
    };
}

function getRangeOf(
    heartRate: number,
    heartRateRanges: HeartRateZonesRanges,
): 'moderate' | 'vigorous' | 'peak' | '' {
    const { moderate, vigorous, peak } = heartRateRanges;
    if (moderate.min < heartRate && heartRate < moderate.max) {
        return 'moderate';
    }
    if (vigorous.min < heartRate && heartRate < vigorous.max) {
        return 'vigorous';
    }
    if (peak.min < heartRate && heartRate < peak.max) {
        return 'peak';
    }
    return '';
}

export default function getHeartRateFormattedData(
    dataset: Array<HeartRateData>,
    userInfo: UserInfo,
): any {
    if (!dataset || !userInfo) {
        return {
            moderate: 0,
            vigorous: 0,
            peak: 0,
        };
    }
    const heartRateRangeZones = getHeartRateZonesRanges(userInfo);
    const minutesPerHeartRateZone = dataset.reduce(
        (acc, current) => {
            const heartRateZone = getRangeOf(
                current.value,
                heartRateRangeZones,
            );

            if (heartRateZone) {
                return {
                    ...acc,
                    [heartRateZone]: acc[heartRateZone] + 1,
                };
            }
            return acc;
        },
        { moderate: 0, vigorous: 0, peak: 0 },
    );

    const activeTime =
        minutesPerHeartRateZone?.vigorous * 2 +
        minutesPerHeartRateZone?.moderate;

    const totalTime =
        minutesPerHeartRateZone.moderate +
        minutesPerHeartRateZone.vigorous +
        minutesPerHeartRateZone.peak;

    return {
        zones: {
            moderate: {
                ...heartRateRangeZones.moderate,
                minutes: minutesPerHeartRateZone.moderate,
            },
            vigorous: {
                ...heartRateRangeZones.vigorous,
                minutes: minutesPerHeartRateZone.vigorous,
            },
            peak: {
                ...heartRateRangeZones.peak,
                minutes: minutesPerHeartRateZone.peak,
            },
        },
        activeTime,
        totalTime,
        intraday: dataset,
    };
}
