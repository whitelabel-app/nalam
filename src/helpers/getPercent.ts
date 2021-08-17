export default function getPercent(total: number, part: number): number {
    return Math.floor((part * 100) / total);
}
