import usaFlag from '@/assets/images/flag/usa.png'
import ausFlag from '@/assets/images/flag/australia.png'
import spainFlag from '@/assets/images/flag/spain.png'
import franceFlag from '@/assets/images/flag/france.png'
import germanyFlag from '@/assets/images/flag/germany.png'
import type { LanguageOption } from '../types/language-dropdown.types'

/**
 * Language Options Data
 *
 * Static list of language options used in the LanguageDropdown component.
 */

export const languageOptions: LanguageOption[] = [
  { text: 'English', flagSrc: usaFlag, flagAlt: 'USA flag' },
  { text: 'Australian', flagSrc: ausFlag, flagAlt: 'Australia flag' },
  { text: 'Spanish', flagSrc: spainFlag, flagAlt: 'Spain flag' },
  { text: 'French', flagSrc: franceFlag, flagAlt: 'France flag' },
  { text: 'German', flagSrc: germanyFlag, flagAlt: 'Germany flag' },
]
