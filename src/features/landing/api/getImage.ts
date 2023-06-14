import { IMAGE_URL } from "../../../config"

export const getImageSrcWithAPIKey = (imageName: string): string => {
  return `${IMAGE_URL}${imageName}`
}
