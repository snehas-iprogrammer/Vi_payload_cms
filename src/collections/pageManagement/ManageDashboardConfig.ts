import { Brands } from '@/enums/brands'
import { Status } from '@/enums/common'
import { DeviceOs } from '@/enums/deviceOs'
import { LOB } from '@/enums/lob'
import LoginTypes from '@/enums/loginTypes'
import { PostPaidPersona } from '@/enums/postpaidPersona'
import { PrepaidPersona } from '@/enums/prepaidPersona'
import { RedHierarchy } from '@/enums/redHierarchy'
import { SocId } from '@/enums/socId'
import { States } from '@/enums/states'
import { enumToOptions } from '@/utils/enumToOptions'
import { CollectionConfig } from 'payload'

const ManageDashboardConfig: CollectionConfig = {
  slug: 'manage_dashboard_config',
  labels: {
    singular: 'Manage Dashboard Config',
    plural: 'Manage Dashboard Configs',
  },
  admin: {
    group: 'Page Management',
    defaultColumns: [
      'lob',
      'prepaidPersona',
      'postpaidPersona',
      'redHierarchy',
      'brand',
      'loginType',
      'circle',
      'appVersion',
      'railSequenceJSON',
      'status',
      // 'deviceOS',
      // 'socIdIncludeExclude',
      // 'socId',
      // 'activeTabForLottie',
      // 'railTitleJSON',
      // 'newDashboardRailSequenceJSON',
    ],
  },
  fields: [
    {
      name: 'circle',
      type: 'select',
      label: 'Circle',
      required: true,
      options: enumToOptions(States),
      admin: {
        style: {
          width: '45%',
          display: 'inline-block',
          marginRight: '4%',
        },
      },
    },
    {
      name: 'brand',
      type: 'select',
      label: 'Brand',
      required: true,
      options: enumToOptions(Brands),
      admin: {
        style: {
          width: '45%',
          display: 'inline-block',
          marginRight: '4%',
        },
      },
    },
    {
      name: 'loginType',
      type: 'select',
      label: 'Login Type',
      options: enumToOptions(LoginTypes),
      admin: {
        style: {
          width: '45%',
          display: 'inline-block',
          marginRight: '4%',
        },
      },
    },
    {
      name: 'appVersion',
      type: 'relationship',
      required: true,
      relationTo: 'app_version',
      label: 'App Version',
      admin: {
        style: {
          width: '45%',
          display: 'inline-block',
          marginRight: '4%',
        },
      },
    },
    {
      name: 'deviceOS',
      type: 'select',
      label: 'Device OS',
      required: true,
      options: enumToOptions(DeviceOs),
      admin: {
        style: {
          width: '45%',
          display: 'inline-block',
          marginRight: '4%',
        },
      },
    },
    {
      name: 'lob',
      type: 'select',
      label: 'LOB',
      required: true,
      options: enumToOptions(LOB),
      admin: {
        style: {
          width: '45%',
          display: 'inline-block',
          marginRight: '4%',
        },
      },
    },
    {
      name: 'prepaidPersona',
      type: 'select',
      label: 'Prepaid Persona',
      options: enumToOptions(PrepaidPersona),
      admin: {
        style: {
          width: '45%',
          display: 'inline-block',
          marginRight: '4%',
        },
      },
    },
    {
      name: 'postpaidPersona',
      type: 'select',
      label: 'Postpaid Persona',
      hasMany: true,
      options: enumToOptions(PostPaidPersona),
      admin: {
        style: {
          width: '45%',
          display: 'inline-block',
          marginRight: '4%',
        },
      },
    },
    {
      name: 'redHierarchy',
      type: 'select',
      label: 'Red Hierarchy',
      options: enumToOptions(RedHierarchy),
      admin: {
        style: {
          width: '45%',
          display: 'inline-block',
          marginRight: '4%',
        },
      },
    },
    {
      name: 'socIdIncludeExclude',
      type: 'select',
      label: 'Select SocId Include or Exclude',
      options: enumToOptions(SocId),
      admin: {
        style: {
          width: '45%',
          display: 'inline-block',
          marginRight: '4%',
        },
      },
    },
    {
      name: 'socId',
      type: 'text',
      label: 'Enter SocId',
      admin: {
        description: 'Enter Socid Comma Seprated. Eg. 25826505,25826506',
        style: {
          width: '45%',
          display: 'inline-block',
          marginRight: '4%',
        },
      },
    },
    {
      name: 'activeTabForLottie',
      type: 'text',
      label: 'Active Tab For Lottie',
      admin: {
        style: {
          width: '45%',
          display: 'inline-block',
          marginRight: '4%',
        },
      },
    },
    {
      name: 'railSequenceJSON',
      type: 'json',
      label: 'Rail Sequence JSON',
      admin: {
        style: {
          width: '45%',
          display: 'inline-block',
          marginRight: '4%',
        },
      },
    },
    {
      name: 'railTitleJSON',
      type: 'json',
      label: 'Rail Title JSON',
      admin: {
        style: {
          width: '45%',
          display: 'inline-block',
          marginRight: '4%',
        },
      },
    },
    {
      name: 'newDashboardRailSequenceJSON',
      type: 'json',
      label: 'New Dashboard Rail Sequence JSON',
      admin: {
        style: {
          width: '45%',
          display: 'inline-block',
          marginRight: '4%',
        },
      },
    },
    {
      name: 'status',
      type: 'radio',
      defaultValue: 'active',
      required: true,
      label: 'Status',
      options: enumToOptions(Status),
      admin: {
        style: {
          width: '45%',
          display: 'inline-block',
          marginRight: '4%',
        },
      },
    },
  ],
}

export default ManageDashboardConfig
