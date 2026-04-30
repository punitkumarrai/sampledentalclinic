import type { SiteConfig } from "@/content/types";
import { sampleDental, dentalClinicTemplate, aesquareDentalClinic } from "@/content/clients";

/**
 * Registry of all available client presets.
 * Add new presets here after creating them in content/clients/.
 */
const presets: Record<string, SiteConfig> = {
  "sample-dental": sampleDental,
  "dental-clinic-template": dentalClinicTemplate,
  "aesquare-dental-clinic": aesquareDentalClinic,
};

/**
 * Active preset ID.
 * Set via NEXT_PUBLIC_PRESET env var, defaults to "dental-clinic-template".
 */
const activePresetId =
  process.env.NEXT_PUBLIC_PRESET || "aesquare-dental-clinic";

/**
 * The resolved site configuration for the active preset.
 */
export const siteConfig: SiteConfig =
  presets[activePresetId] ?? aesquareDentalClinic;

/**
 * Convenience getter (same as siteConfig).
 */
export function getConfig(): SiteConfig {
  return siteConfig;
}
