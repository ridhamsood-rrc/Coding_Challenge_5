/**
 * Exporting the interface for the health check point.
 */
export interface healthCheckPoint {
    status: string;
    uptime: number;
    timestamp: string;
    version: string;
}