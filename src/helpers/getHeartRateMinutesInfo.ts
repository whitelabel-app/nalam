export default function getHeartRateMinutesInfo(heartRateZones) {
    let heartRateMinutesInfo = {
        moderate: 0,
        vigorous: 0,
        peak: 0,
        total: 0,
    };
    heartRateZones?.forEach(heartRateZone => {
        switch (heartRateZone.name) {
            case 'Fat Burn':
                heartRateMinutesInfo.moderate += heartRateZone.minutes;
                heartRateMinutesInfo.total += heartRateZone.minutes;
                break;
            case 'Cardio':
                heartRateMinutesInfo.vigorous += heartRateZone.minutes;
                heartRateMinutesInfo.total += heartRateZone.minutes;
                break;
            case 'Peak':
                heartRateMinutesInfo.peak += heartRateZone.minutes;
                heartRateMinutesInfo.total += heartRateZone.minutes;
                break;
            default:
                break;
        }
    });
    return heartRateMinutesInfo;
}
