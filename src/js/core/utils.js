/**
 * Shared utility functions for ArthaNavigate
 */

/**
 * Format a number to Indonesian Rupiah (IDR) currency string
 * @param {number} number - The number to format
 * @returns {string} Formatted IDR string (e.g., "Rp 1.500.000")
 */
export const formatIDR = (number) => {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(number);
};
