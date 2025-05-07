import { Endpoint } from 'payload'
import AppVersionModel from '@/utils/models/AppVersionModel'
import { createApiResponse } from '@/utils/helper'

const getAppVersion: Endpoint = {
  path: '/app-version',
  method: 'get',
  handler: async (_req) => {
    try {
      const latestVersion = await AppVersionModel.findOne(
        {},
        {
          appVersion: 1,
          textMessage: 1,
          isSilentOTAEnabled: 1,
          webTnCTimestamp: 1,
          status: 1,
          isPaletroAPICall: 1,
          _id: 0,
        },
      ).sort({ createdAt: -1 })

      if (!latestVersion) {
        return Response.json(createApiResponse(false, null, 'No version found'))
      }

      return Response.json(createApiResponse(true, latestVersion))
    } catch (error: unknown) {
      console.error('Error in /app-version endpoint:', error)
      return Response.json(
        createApiResponse(false, null, error instanceof Error ? error.message : String(error)),
      )
    }
  },
}

export default getAppVersion
