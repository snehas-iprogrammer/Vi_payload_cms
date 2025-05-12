import { Endpoint } from 'payload'
import BannerScreenModel from '@/utils/models/BannerScreenModel'
import { createApiResponse } from '@/utils/helper'

const getBannerScreens: Endpoint = {
  path: '/getbannerscreen',
  method: 'get',
  handler: async (_req) => {
    try {
      const bannerscreenData = await BannerScreenModel.findOne(
        {},
        {
          screen_name: 1,
          _id: 0,
        },
      ).sort({ createdAt: -1 })
      if (!bannerscreenData) {
        return Response.json(createApiResponse(false, null, 'No Banner Screen found'))
      }

      return Response.json(createApiResponse(true, bannerscreenData))
    } catch (error: unknown) {
      console.error('Error in /getbannerscreen endpoint:', error)
      return Response.json(
        createApiResponse(false, null, error instanceof Error ? error.message : String(error)),
      )
    }
  },
}

export default getBannerScreens
