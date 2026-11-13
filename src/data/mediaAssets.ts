import heroAtelierImg from '../assets/images/hero_ai_classroom_atelier_1794524486569.jpg';
import spaceLibraryImg from '../assets/images/prompt_space_library_1794524486385.jpg';
import humanHeartImg from '../assets/images/prompt_human_heart_1794524486569.jpg';
import renewableEnergyImg from '../assets/images/prompt_renewable_energy_1794524487228.jpg';
import plantCellImg from '../assets/images/prompt_plant_cell_1794524487558.jpg';
import { PromptImageKey } from './moduloData.ts';

export const HERO_STUDIO_IMAGE = heroAtelierImg;

export const PROMPT_SAMPLE_IMAGES: Record<PromptImageKey, string> = {
  'space-library': spaceLibraryImg,
  'renewable-energy': renewableEnergyImg,
  'human-heart': humanHeartImg,
  'plant-cell': plantCellImg,
};
