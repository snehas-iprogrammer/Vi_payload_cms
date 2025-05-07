import { Status } from '@/enums/common'
import { enumToOptions } from '@/utils/enumToOptions'
import { sqlID } from '@/utils/lib/sqlId'
import { CollectionConfig } from 'payload'

const AppVersion: CollectionConfig = {
  slug: 'app_version',
  labels: {
    singular: 'Manage App Version',
    plural: 'Manage App Versions',
  },
  admin: {
    group: 'Page Management',
    useAsTitle: 'appVersion',
    defaultColumns: ['appVersion', 'isSilentOTAEnabled', 'status'],
  },
  hooks: {
    beforeChange: [
      async ({ data, operation }) => {
        return sqlID({ sequence: 'app_version', data, operation })
      },
    ],
  },
  fields: [
    {
      name: 'sql_id',
      label: 'SQL ID',
      type: 'number',
      required: false,
      unique: true,
      admin: {
        hidden: true,
      },
    },
    {
      name: 'appVersion',
      label: 'App Version',
      type: 'text',
      required: true,
      admin: {
        style: {
          width: '45%',
          display: 'inline-block',
          marginRight: '4%',
        },
      },
    },
    {
      name: 'textMessage',
      label: 'Text Message',
      type: 'text',
      required: true,
      admin: {
        style: {
          width: '45%',
          display: 'inline-block',
          marginRight: '4%',
        },
      },
    },
    {
      name: 'redxOverlayDisplayDays',
      label: 'Redx Overlay Display Days',
      type: 'number',
      required: true,
      admin: {
        style: {
          width: '45%',
          display: 'inline-block',
          marginRight: '4%',
        },
      },
    },
    {
      name: 'webTnCTimestamp',
      label: 'Web TnC Timestamp',
      type: 'date',
      required: true,
      admin: {
        style: {
          width: '45%',
          display: 'inline-block',
          marginRight: '4%',
        },
      },
    },
    {
      name: 'vigAutoExtendDate',
      label: 'VIG Auto Extend Date',
      type: 'date',
      required: true,
      admin: {
        style: {
          width: '45%',
          display: 'inline-block',
          marginRight: '4%',
        },
      },
    },
    {
      name: 'copyOfVersion',
      label: 'Copy of Version',
      type: 'select',
      admin: {
        style: {
          width: '45%',
          display: 'inline-block',
        },
      },
      options: [
        {
          label: 'Version 1',
          value: 'version1',
        },
        {
          label: 'Version 2',
          value: 'version2',
        },
        {
          label: 'Version 3',
          value: 'version3',
        },
      ],
      required: true,
    },
    {
      name: 'isSilentOTAEnabled',
      label: 'Is Silent OTA Enabled',
      type: 'radio',
      admin: {
        style: {
          width: '30%',
          display: 'inline-block',
        },
      },
      defaultValue: Status.Active,
      options: enumToOptions(Status),
      required: true,
    },
    {
      name: 'isLiteRechargeBannerShown',
      label: 'Is Lite Recharge Banner Shown',
      type: 'radio',
      defaultValue: Status.Active,
      options: enumToOptions(Status),
      required: true,
      admin: {
        style: {
          width: '30%',
          display: 'inline-block',
        },
      },
    },
    {
      name: 'isPaletroAPICall',
      label: 'Is Paletro API Call',
      type: 'radio',
      defaultValue: Status.Active,
      options: enumToOptions(Status),
      admin: {
        style: {
          width: '30%',
          display: 'inline-block',
        },
      },
    },
    {
      name: 'isPaletroPromotionalTitleShown',
      label: 'Is Paletro Promotional Title Shown',
      type: 'radio',
      defaultValue: Status.Active,
      options: enumToOptions(Status),
      required: true,
      admin: {
        style: {
          width: '30%',
          display: 'inline-block',
        },
      },
    },
    {
      name: 'isViFinanceDown',
      label: 'Is Vi Finance Down',
      type: 'radio',
      defaultValue: Status.Active,
      options: enumToOptions(Status),
      required: true,
      admin: {
        style: {
          width: '30%',
          display: 'inline-block',
        },
      },
    },
    {
      name: 'status',
      label: 'Status',
      type: 'radio',
      defaultValue: Status.Active,
      options: enumToOptions(Status),
      required: true,
      admin: {
        style: {
          width: '30%',
          display: 'inline-block',
        },
      },
    },
    {
      name: 'isPrepaidViShopDisabled',
      label: 'Is Prepaid Vi Shop Disabled',
      type: 'radio',
      defaultValue: Status.Active,
      options: enumToOptions(Status),
      required: true,
      admin: {
        style: {
          width: '30%',
          display: 'inline-block',
        },
      },
    },
    {
      name: 'isPostpaidViShopDisabled',
      label: 'Is Postpaid Vi Shop Disabled',
      type: 'radio',
      defaultValue: Status.Active,
      options: enumToOptions(Status),
      required: true,
      admin: {
        style: {
          width: '30%',
          display: 'inline-block',
        },
      },
    },
    {
      name: 'isCOCPViShopDisabled',
      label: 'Is COCP Vi Shop Disabled',
      type: 'radio',
      defaultValue: Status.Active,
      options: enumToOptions(Status),
      required: true,
      admin: {
        style: {
          width: '30%',
          display: 'inline-block',
        },
      },
    },
    {
      name: 'isNonViViShopDisabled',
      label: 'Is Non-Vi Vi Shop Disabled',
      type: 'radio',
      defaultValue: Status.Active,
      options: enumToOptions(Status),
      required: true,
      admin: {
        style: {
          width: '30%',
          display: 'inline-block',
        },
      },
    },
    {
      name: 'isShopDown',
      label: 'Is Shop Down',
      type: 'radio',
      defaultValue: Status.Active,
      options: enumToOptions(Status),
      required: true,
      admin: {
        style: {
          width: '30%',
          display: 'inline-block',
        },
      },
    },
  ],
}

export default AppVersion
