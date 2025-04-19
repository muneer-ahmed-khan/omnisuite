/**
 * AssetFile Interface
 * -----------------------------------------------------------------------------
 * Defines a single asset category (folder) shown in the `AssetsFiles` component.
 *
 * @property id    - Unique identifier for the asset category.
 * @property name  - Display name of the folder.
 * @property files - Textual file count (e.g., "387 Files").
 * @property size  - Total size descriptor (e.g., "4.5 GB").
 * @property link  - Vue router link target for navigating into this folder.
 */
export interface AssetFile {
  id: number
  name: string
  files: string
  size: string
  link: string
}
