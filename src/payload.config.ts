// storage-adapter-import-placeholder
import { mongooseAdapter } from '@payloadcms/db-mongodb'
import { payloadCloudPlugin } from '@payloadcms/payload-cloud'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import path from 'path'
import { buildConfig } from 'payload'
import { fileURLToPath } from 'url'
import sharp from 'sharp'

import { Users } from './collections/Users'
import BannerScreens from './collections/banner/Screen'
import BannerManage from './collections/banner/Manage'
import AppVersion from './collections/pageManagement/AppVersion'
import { customEndpoints } from './endpoints'
import ManageScreenModel from './utils/models/ManageScreenModel'
import { createApiResponse } from './utils/helper'
import AppVersionModel from './utils/models/AppVersionModel'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  collections: [
    Users,
    // Media,
    AppVersion,
    BannerScreens,
    BannerManage,
    // ManageDashboardConfig,
    // ManageNightPack,
    // RedxHtml,
    // CircleWiseStateConfiguration,
    // ManageRechargeOffers,
    // ManageVideos,
  ],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || '',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: mongooseAdapter({
    url: process.env.DATABASE_URI || '',
  }),
  sharp,
  plugins: [
    payloadCloudPlugin(),
    // storage-adapter-placeholder
  ],
  endpoints: [
    ...customEndpoints,
  ],
})
