import type { SiteConfig } from "@/content/types";
import { sampleDental, dentalClinicTemplate, shlokaDental } from "@/content/clients";

/**
 * Registry of all available client presets.
 * Add new presets here after creating them in content/clients/.
 */
const presets: Record<string, SiteConfig> = {
  "sample-dental": sampleDental,
  "dental-clinic-template": dentalClinicTemplate,
  "shloka-dental": shlokaDental,
};

/**
 * Active preset ID.
 * Set via NEXT_PUBLIC_PRESET env var, defaults to "dental-clinic-template".
 */
const activePresetId =
  process.env.NEXT_PUBLIC_PRESET || "shloka-dental";

/**
 * The resolved site configuration for the active preset.
 */
export const siteConfig: SiteConfig =
  presets[activePresetId] ?? dentalClinicTemplate;

/**
 * Convenience getter (same as siteConfig).
 */
export function getConfig(): SiteConfig {
  return siteConfig;
}
