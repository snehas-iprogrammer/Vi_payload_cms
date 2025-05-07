import { Brands } from '@/enums/brands'
import { Status } from '@/enums/common'
import { DeviceOs } from '@/enums/deviceOs'
import { LOB } from '@/enums/lob'
import LoginTypes from '@/enums/loginTypes'
import { PostPaidPersona } from '@/enums/postpaidPersona'
import { PrepaidPersona } from '@/enums/prepaidPersona'
import { PrepaidPlans } from '@/enums/prepaidPlans'
import { RedHierarchy } from '@/enums/redHierarchy'
import { States } from '@/enums/states'
import { enumToOptions } from '@/utils/enumToOptions'
import { CollectionConfig } from 'payload'

const ManageVideos: CollectionConfig = {
  slug: 'manage_videos',
  labels: {
    singular: 'Manage Video',
    plural: 'Manage Videos',
  },
  admin: {
    useAsTitle: 'videoTitle',
    group: 'Page Management',
    defaultColumns: [
      'videoTitle',
      'lob',
      'loginType',
      'brand',
      'circle',
      'appVersion',
      'deviceOS',
      'redirectLink',
      'updateAt',
      'status',
    ],
  },
  fields: [
    {
      name: 'loginType',
      label: 'Login Type',
      type: 'select',
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
      name: 'circle',
      label: 'Circle',
      type: 'select',
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
      name: 'lob',
      label: 'LOB',
      type: 'select',
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
      name: 'brand',
      label: 'Brand',
      type: 'select',
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
      name: 'prepaidPersona',
      label: 'Prepaid Persona',
      type: 'select',
      hasMany: true,
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
      label: 'Postpaid Persona',
      type: 'select',
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
      name: 'prepaidPlans',
      label: 'Prepaid Plans',
      type: 'select',
      options: enumToOptions(PrepaidPlans),
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
      label: 'Red Hierarchy',
      type: 'select',
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
      name: 'socid',
      label: 'Enter Socid',
      type: 'number',
      admin: {
        style: {
          width: '45%',
          display: 'inline-block',
          marginRight: '4%',
        },
        description: 'Enter Socid Comma Seprated. Eg. 25826505,25826506',
      },
    },
    {
      name: 'socidIncludeOrExclude',
      label: 'Include or Exclude Socid',
      type: 'select',
      options: ['Include Socid', 'Exclude Socid'],
      admin: {
        style: {
          width: '45%',
          display: 'inline-block',
          marginRight: '4%',
        },
      },
    },
    {
      name: 'videoTitle',
      label: 'Video Title',
      type: 'text',
      required: true,
      admin: {
        style: {
          width: '45%',
          display: 'inline-block',
          marginRight: '4%',
        },
        description: 'Enter video title Eg. Postpaid Plan',
      },
    },
    {
      name: 'videoLink',
      label: 'Video Link',
      type: 'text',
      required: true,
      admin: {
        style: {
          width: '45%',
          display: 'inline-block',
          marginRight: '4%',
        },
        description: "Enter Video's S3 Bucket public URL",
      },
    },
    {
      name: 'linkType',
      label: 'Link Type',
      type: 'select',
      required: true,
      options: ['Internal', 'External'],
      admin: {
        style: {
          width: '45%',
          display: 'inline-block',
          marginRight: '4%',
        },
      },
    },
    {
      name: 'internalLink',
      label: 'Internal Link',
      type: 'text',
      admin: {
        condition: (_, siblingData) => siblingData.linkType === 'Internal',
        style: {
          width: '45%',
          display: 'inline-block',
          marginRight: '4%',
        },
        description: 'Enter internal link Eg. /recharge',
      },
    },
    {
      name: 'externalLink',
      label: 'External Link',
      type: 'text',
      admin: {
        condition: (_, siblingData) => siblingData.linkType === 'External',
        style: {
          width: '45%',
          display: 'inline-block',
          marginRight: '4%',
        },
        description: 'Enter external link Eg. http://myvi.mydala.com',
      },
    },
    {
      name: 'ctaName',
      label: 'CTA Name',
      type: 'text',
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
      label: 'Device OS',
      type: 'select',
      required: true,
      options: enumToOptions(DeviceOs), // Fill OS options
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
      label: 'App Version',
      type: 'relationship',
      required: true,
      hasMany: true,
      relationTo: 'app_version',
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
      label: 'Status',
      type: 'radio',
      required: true,
      options: enumToOptions(Status),
      defaultValue: 'active',
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

export default ManageVideos
