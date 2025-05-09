import { Status } from '@/enums/common'
import { enumToOptions } from '@/utils/enumToOptions'
import { sqlID } from '@/utils/lib/sqlId'
import { CollectionConfig } from 'payload'
import React from 'react';

const AppVersion: CollectionConfig = {
  slug: 'app_version',
  labels: {
    singular: 'Manage App Version',
    plural: 'Manage App Versions',
  },
  admin: {
    group: 'Page Management',
    useAsTitle: 'app_version',
    defaultColumns: ['app_version', 'silent_ota', 'status'],
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
      name: 'app_version',
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
      name: 'text_msg',
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
      name: 'redx_overlay_display_days',
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
      name: 'last_updated_wb_tnc_timestamp',
      label: 'Web TnC Timestamp',
      type: 'date',
      required: true,
      admin: {
        style: {
          width: '45%',
          display: 'inline-block',
          marginRight: '4%',
        },
        date:{
          pickerAppearance: 'dayAndTime'
        }
      },
    },
    {
      name: 'vig_auto_extend_date',
      label: 'VIG Auto Extend Date',
      type: 'date',
      required: true,
      admin: {
        style: {
          width: '45%',
          display: 'inline-block',
          marginRight: '4%',
        },
        date:{
          pickerAppearance: 'dayAndTime'
        }
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
      name: 'silent_ota',
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
      name: 'is_lite_recharge_banner_shown',
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
      name: 'is_paletro_api_call',
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
      name: 'is_paletro_promotional_title_shown',
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
      name: 'is_vi_finance_down',
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
      name: 'is_prepaid_vishop_disabled',
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
      name: 'is_postpaid_vishop_disabled',
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
      name: 'is_cocp_vishop_disabled',
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
      name: 'is_non_vi_vishop_disabled',
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
      name: 'is_shop_down',
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
