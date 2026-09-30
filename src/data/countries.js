// Comprehensive worldwide countries dataset with ISO codes, dial codes, flags, placeholders and formats
export const COUNTRIES = [
  { code: "IN", name: "India", dialCode: "+91", flag: "🇮🇳", placeholder: "98765 43210", format: [5, 5], minDigits: 10, maxDigits: 10 },
  { code: "US", name: "United States", dialCode: "+1", flag: "🇺🇸", placeholder: "(555) 000-0000", format: [3, 3, 4], minDigits: 10, maxDigits: 10 },
  { code: "GB", name: "United Kingdom", dialCode: "+44", flag: "🇬🇧", placeholder: "7911 123456", format: [4, 6], minDigits: 10, maxDigits: 10 },
  { code: "AE", name: "United Arab Emirates", dialCode: "+971", flag: "🇦🇪", placeholder: "50 123 4567", format: [2, 3, 4], minDigits: 9, maxDigits: 9 },
  { code: "SG", name: "Singapore", dialCode: "+65", flag: "🇸🇬", placeholder: "8123 4567", format: [4, 4], minDigits: 8, maxDigits: 8 },
  { code: "MY", name: "Malaysia", dialCode: "+60", flag: "🇲🇾", placeholder: "12-345 6789", format: [2, 3, 4], minDigits: 9, maxDigits: 10 },
  { code: "SA", name: "Saudi Arabia", dialCode: "+966", flag: "🇸🇦", placeholder: "50 123 4567", format: [2, 3, 4], minDigits: 9, maxDigits: 9 },
  { code: "CA", name: "Canada", dialCode: "+1", flag: "🇨🇦", placeholder: "(555) 000-0000", format: [3, 3, 4], minDigits: 10, maxDigits: 10 },
  { code: "AU", name: "Australia", dialCode: "+61", flag: "🇦🇺", placeholder: "412 345 678", format: [3, 3, 3], minDigits: 9, maxDigits: 9 },
  { code: "QA", name: "Qatar", dialCode: "+974", flag: "🇶🇦", placeholder: "3312 3456", format: [4, 4], minDigits: 8, maxDigits: 8 },
  { code: "KW", name: "Kuwait", dialCode: "+965", flag: "🇰🇼", placeholder: "9123 4567", format: [4, 4], minDigits: 8, maxDigits: 8 },
  { code: "OM", name: "Oman", dialCode: "+968", flag: "🇴🇲", placeholder: "9123 4567", format: [4, 4], minDigits: 8, maxDigits: 8 },
  { code: "BH", name: "Bahrain", dialCode: "+973", flag: "🇧🇭", placeholder: "3912 3456", format: [4, 4], minDigits: 8, maxDigits: 8 },
  { code: "LK", name: "Sri Lanka", dialCode: "+94", flag: "🇱🇰", placeholder: "71 234 5678", format: [2, 3, 4], minDigits: 9, maxDigits: 9 },
  { code: "BD", name: "Bangladesh", dialCode: "+880", flag: "🇧🇩", placeholder: "1712-345678", format: [4, 6], minDigits: 10, maxDigits: 10 },
  { code: "NP", name: "Nepal", dialCode: "+977", flag: "🇳🇵", placeholder: "984-1234567", format: [3, 7], minDigits: 10, maxDigits: 10 },
  { code: "DE", name: "Germany", dialCode: "+49", flag: "🇩🇪", placeholder: "151 23456789", format: [3, 8], minDigits: 10, maxDigits: 11 },
  { code: "FR", name: "France", dialCode: "+33", flag: "🇫🇷", placeholder: "6 12 34 56 78", format: [1, 2, 2, 2, 2], minDigits: 9, maxDigits: 9 },
  { code: "IT", name: "Italy", dialCode: "+39", flag: "🇮🇹", placeholder: "312 345 6789", format: [3, 3, 4], minDigits: 10, maxDigits: 10 },
  { code: "ES", name: "Spain", dialCode: "+34", flag: "🇪🇸", placeholder: "612 34 56 78", format: [3, 2, 2, 2], minDigits: 9, maxDigits: 9 },
  { code: "NL", name: "Netherlands", dialCode: "+31", flag: "🇳🇱", placeholder: "6 12345678", format: [1, 8], minDigits: 9, maxDigits: 9 },
  { code: "CH", name: "Switzerland", dialCode: "+41", flag: "🇨🇭", placeholder: "79 123 45 67", format: [2, 3, 2, 2], minDigits: 9, maxDigits: 9 },
  { code: "NZ", name: "New Zealand", dialCode: "+64", flag: "🇳🇿", placeholder: "21 123 4567", format: [2, 3, 4], minDigits: 8, maxDigits: 10 },
  { code: "ZA", name: "South Africa", dialCode: "+27", flag: "🇿🇦", placeholder: "71 234 5678", format: [2, 3, 4], minDigits: 9, maxDigits: 9 },
  { code: "JP", name: "Japan", dialCode: "+81", flag: "🇯🇵", placeholder: "90-1234-5678", format: [2, 4, 4], minDigits: 10, maxDigits: 10 },
  { code: "KR", name: "South Korea", dialCode: "+82", flag: "🇰🇷", placeholder: "10-1234-5678", format: [2, 4, 4], minDigits: 10, maxDigits: 10 },
  { code: "CN", name: "China", dialCode: "+86", flag: "🇨🇳", placeholder: "138 1234 5678", format: [3, 4, 4], minDigits: 11, maxDigits: 11 },
  { code: "ID", name: "Indonesia", dialCode: "+62", flag: "🇮🇩", placeholder: "812-3456-7890", format: [3, 4, 4], minDigits: 9, maxDigits: 12 },
  { code: "TH", name: "Thailand", dialCode: "+66", flag: "🇹🇭", placeholder: "81 234 5678", format: [2, 3, 4], minDigits: 9, maxDigits: 9 },
  { code: "PH", name: "Philippines", dialCode: "+63", flag: "🇵🇭", placeholder: "917 123 4567", format: [3, 3, 4], minDigits: 10, maxDigits: 10 },
  { code: "VN", name: "Vietnam", dialCode: "+84", flag: "🇻🇳", placeholder: "91 234 56 78", format: [2, 3, 2, 2], minDigits: 9, maxDigits: 10 },
  { code: "BR", name: "Brazil", dialCode: "+55", flag: "🇧🇷", placeholder: "11 91234-5678", format: [2, 5, 4], minDigits: 10, maxDigits: 11 },
  { code: "MX", name: "Mexico", dialCode: "+52", flag: "🇲🇽", placeholder: "55 1234 5678", format: [2, 4, 4], minDigits: 10, maxDigits: 10 },
  { code: "TR", name: "Turkey", dialCode: "+90", flag: "🇹🇷", placeholder: "512 345 67 89", format: [3, 3, 2, 2], minDigits: 10, maxDigits: 10 },
  { code: "EG", name: "Egypt", dialCode: "+20", flag: "🇪🇬", placeholder: "10 1234 5678", format: [2, 4, 4], minDigits: 10, maxDigits: 10 },
  { code: "NG", name: "Nigeria", dialCode: "+234", flag: "🇳🇬", placeholder: "803 123 4567", format: [3, 3, 4], minDigits: 10, maxDigits: 10 },
  { code: "KE", name: "Kenya", dialCode: "+254", flag: "🇰🇪", placeholder: "712 345678", format: [3, 6], minDigits: 9, maxDigits: 9 },
  { code: "IE", name: "Ireland", dialCode: "+353", flag: "🇮🇪", placeholder: "83 123 4567", format: [2, 3, 4], minDigits: 9, maxDigits: 9 },
  { code: "BE", name: "Belgium", dialCode: "+32", flag: "🇧🇪", placeholder: "470 12 34 56", format: [3, 2, 2, 2], minDigits: 9, maxDigits: 9 },
  { code: "SE", name: "Sweden", dialCode: "+46", flag: "🇸🇪", placeholder: "70 123 45 67", format: [2, 3, 2, 2], minDigits: 9, maxDigits: 9 },
  { code: "NO", name: "Norway", dialCode: "+47", flag: "🇳🇴", placeholder: "412 34 567", format: [3, 2, 3], minDigits: 8, maxDigits: 8 },
  { code: "DK", name: "Denmark", dialCode: "+45", flag: "🇩🇰", placeholder: "21 34 56 78", format: [2, 2, 2, 2], minDigits: 8, maxDigits: 8 },
  { code: "FI", name: "Finland", dialCode: "+358", flag: "🇫🇮", placeholder: "40 1234567", format: [2, 7], minDigits: 8, maxDigits: 10 },
  { code: "AT", name: "Austria", dialCode: "+43", flag: "🇦🇹", placeholder: "664 1234567", format: [3, 7], minDigits: 9, maxDigits: 11 },
  { code: "PT", name: "Portugal", dialCode: "+351", flag: "🇵🇹", placeholder: "912 345 678", format: [3, 3, 3], minDigits: 9, maxDigits: 9 },
  { code: "GR", name: "Greece", dialCode: "+30", flag: "🇬🇷", placeholder: "691 234 5678", format: [3, 3, 4], minDigits: 10, maxDigits: 10 },
  { code: "PL", name: "Poland", dialCode: "+48", flag: "🇵🇱", placeholder: "512 345 678", format: [3, 3, 3], minDigits: 9, maxDigits: 9 },
  { code: "RO", name: "Romania", dialCode: "+40", flag: "🇷🇴", placeholder: "712 345 678", format: [3, 3, 3], minDigits: 9, maxDigits: 9 },
  { code: "CZ", name: "Czech Republic", dialCode: "+420", flag: "🇨🇿", placeholder: "601 123 456", format: [3, 3, 3], minDigits: 9, maxDigits: 9 },
  { code: "HU", name: "Hungary", dialCode: "+36", flag: "🇭🇺", placeholder: "20 123 4567", format: [2, 3, 4], minDigits: 9, maxDigits: 9 },
  { code: "IL", name: "Israel", dialCode: "+972", flag: "🇮🇱", placeholder: "50-123-4567", format: [2, 3, 4], minDigits: 9, maxDigits: 9 },
  { code: "HK", name: "Hong Kong", dialCode: "+852", flag: "🇭🇰", placeholder: "9123 4567", format: [4, 4], minDigits: 8, maxDigits: 8 },
  { code: "TW", name: "Taiwan", dialCode: "+886", flag: "🇹🇼", placeholder: "912 345 678", format: [3, 3, 3], minDigits: 9, maxDigits: 9 },
  { code: "AR", name: "Argentina", dialCode: "+54", flag: "🇦🇷", placeholder: "11 1234-5678", format: [2, 4, 4], minDigits: 10, maxDigits: 10 },
  { code: "CL", name: "Chile", dialCode: "+56", flag: "🇨🇱", placeholder: "9 1234 5678", format: [1, 4, 4], minDigits: 9, maxDigits: 9 },
  { code: "CO", name: "Colombia", dialCode: "+57", flag: "🇨🇴", placeholder: "312 345 6789", format: [3, 3, 4], minDigits: 10, maxDigits: 10 },
  { code: "PE", name: "Peru", dialCode: "+51", flag: "🇵🇪", placeholder: "912 345 678", format: [3, 3, 3], minDigits: 9, maxDigits: 9 },
  { code: "PK", name: "Pakistan", dialCode: "+92", flag: "🇵🇰", placeholder: "301 2345678", format: [3, 7], minDigits: 10, maxDigits: 10 },
  { code: "MV", name: "Maldives", dialCode: "+960", flag: "🇲🇻", placeholder: "791 2345", format: [3, 4], minDigits: 7, maxDigits: 7 },
  { code: "MU", name: "Mauritius", dialCode: "+230", flag: "🇲🇺", placeholder: "5123 4567", format: [4, 4], minDigits: 8, maxDigits: 8 },
];

/**
 * Format raw digit string according to country format groups
 */
export function formatPhoneNumber(digits, country) {
  if (!digits) return "";
  const cleaned = digits.replace(/\D/g, "");
  if (!country || !country.format) return cleaned;

  let formatted = "";
  let currentIndex = 0;

  for (let i = 0; i < country.format.length; i++) {
    const groupLen = country.format[i];
    if (currentIndex >= cleaned.length) break;

    const part = cleaned.slice(currentIndex, currentIndex + groupLen);
    if (formatted.length > 0) {
      formatted += " ";
    }
    formatted += part;
    currentIndex += groupLen;
  }

  // Any remaining digits
  if (currentIndex < cleaned.length) {
    formatted += " " + cleaned.slice(currentIndex);
  }

  return formatted;
}

/**
 * Validate phone number digits for selected country
 */
export function validatePhoneNumber(digits, country) {
  if (!digits) return false;
  const cleaned = digits.replace(/\D/g, "");
  const min = country?.minDigits || 7;
  const max = country?.maxDigits || 15;
  return cleaned.length >= min && cleaned.length <= max;
}
