import { Endpoint } from 'payload'
import AppVersionModel from '@/utils/models/AppVersionModel'
import { createApiResponse } from '@/utils/helper'

const getAppVersion: Endpoint = {
  path: '/app-version',
  method: 'post',
  handler: async (_req) => {
     
    try {
      const reqData = _req.json ? await _req.json() : null
      console.log(reqData);
      const latestVersion = await AppVersionModel.aggregate([
        {$match:{
          app_version:reqData.appVersion,
        }},
        { $sort: { createdAt: -1 } },
        // { $limit: 1 },
        {
          $project: {
            _id: 0,
            text_msg: "$text_msg",
            app_version: "$app_version",
            silentOTA: "$silent_ota",
            webTnCTimestamp : "$last_updated_wb_tnc_timestamp",
            isPaletroAPICall: "$is_paletro_api_call",
            redxOverlayDisplayDays:"$redx_overlay_display_days",
            isLiteRechargeBannerShown:"$is_lite_recharge_banner_shown",
            status: "$status",
            isPaletroPromotionalTitleShown: "$is_paletro_promotional_title_shown",
            isShopDown: "$is_shop_down",
            isPrepaidVishopDisabled: "$is_prepaid_vishop_disabled",
            isPostpaidVishopDisabled:"$is_postpaid_vishop_disabled",
            isCOCPVishopDisabled: "$is_cocp_vishop_disabled",
            isNonVIVishopDisabled:"$is_non_vi_vishop_disabled",
            isViFinanceDown: "$is_vi_finance_down",
            vigAutoExtendDate: "$vig_auto_extend_date",
          }
        }
      ])      
      // const transformedAppversion = {
        
      //   text_msg:latestVersion.text_msg,
      //   app_version:latestVersion.app_version,
      //   silentOTA:latestVersion.silent_ota,
      //   lastUpdatedWbTnCTimestamp:latestVersion.last_updated_wb_tnc_timestamp,
      //   is_paletro_api_call:latestVersion.is_paletro_api_call,
      //   overlayDisplayDays:latestVersion.redx_overlay_display_days,
      //   isLiteRechargeBannerShown:latestVersion.is_lite_recharge_banner_shown,
      //   status:latestVersion.status,
      //   isPelatroPromotionalTitleShown:latestVersion.is_paletro_promotional_title_shown,
      //   isShopDown:latestVersion.is_shop_down,
      //   isPrepaidViShopDisabled:latestVersion.is_prepaid_vishop_disabled,
      //   isPostpaidViShopDisabled:latestVersion.is_postpaid_vishop_disabled,
      //   isCocpViShopDisabled:latestVersion.is_cocp_vishop_disabled,
      //   isNonViViShopDisabled:latestVersion.is_non_vi_vishop_disabled,
      //   isViFinanceDown:latestVersion.is_vi_finance_down,
      //   vigAutoExtendDate:latestVersion.vig_auto_extend_date,

      // };
      // const transformedAppversion = latestVersion.map((v) => ({
      //   text_msg: v.text_msg,
      //   appVersion: v.app_version,
      //   silentOTA: v.silent_ota,
      //   lastUpdatedWbTnCTimestamp: v.last_updated_wb_tnc_timestamp,
      //   isPelatroApiCall: v.is_paletro_api_call,
      //   overlayDisplayDays: v.redx_overlay_display_days,
      //   isLiteRechargeBannerShown: v.is_lite_recharge_banner_shown,
      //   status: v.status,
      //   isPelatroPromotionalTitleShown: v.is_paletro_promotional_title_shown,
      //   isShopDown: v.is_shop_down,
      //   isPrepaidViShopDisabled: v.is_prepaid_vishop_disabled,
      //   isPostpaidViShopDisabled: v.is_postpaid_vishop_disabled,
      //   isCocpViShopDisabled: v.is_cocp_vishop_disabled,
      //   isNonViViShopDisabled: v.is_non_vi_vishop_disabled,
      //   isViFinanceDown: v.is_vi_finance_down,
      //   vigAutoExtendDate: v.vig_auto_extend_date,
      // }));
      // const {
      //   app_version:appVersion,
      // }=latestVersion
      // console.log(transformedAppversion)
      // if (!latestVersion) {
      //   return Response.json(createApiResponse(false, null, 'No version found'))
      // }

      return Response.json(latestVersion)
    } catch (error: unknown) {
      console.error('Error in /app-version endpoint:', error)
      return Response.json(
        createApiResponse(false, null, error instanceof Error ? error.message : String(error)),
      )
    }
  },
}

export default getAppVersion
