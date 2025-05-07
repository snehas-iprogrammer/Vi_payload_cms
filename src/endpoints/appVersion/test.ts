import { Endpoint } from 'payload'
import { createApiResponse } from '@/utils/helper'
import ManageScreenModel from '@/utils/models/ManageScreenModel'

const test: Endpoint = {
    path: '/app-v',
    method: 'get',
    handler: async (_req) => {
      try {
        const latestVersion = await ManageScreenModel.find({}).populate('app_version')

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

  export default test
