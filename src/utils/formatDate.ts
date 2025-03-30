import { format } from "date-fns";

/**
 * Formats a given date string into a readable format
 * - Uses "MMM dd, yyyy" format (e.g., "Jan 01, 2025")
 * - Handles errors gracefully if an invalid date is encountered
 * @param {string} dateString - The date string to format
 * @returns {string} - Formatted date string or original string if an error occurs
 */
export const formatDate = (dateString: string) => {
    try {
        return format(new Date(dateString), "MMM dd, yyyy");
    } catch (e) {
        console.error("Invalid date format", e);
        return dateString;
    }
};