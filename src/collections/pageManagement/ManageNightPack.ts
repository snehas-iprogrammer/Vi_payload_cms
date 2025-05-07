import { Brands } from '@/enums/brands'
import { DeviceOs } from '@/enums/deviceOs'
import LoginTypes from '@/enums/loginTypes'
import { Rank } from '@/enums/rank'
import { States } from '@/enums/states'
import { enumToOptions } from '@/utils/enumToOptions'
import { CollectionConfig } from 'payload'

const ManageNightPack: CollectionConfig = {
  slug: 'manage_night_pack',
  labels: {
    singular: 'Manage Night Pack',
    plural: 'Manage Night Packs',
  },
  admin: {
    group: 'Page Management',
    defaultColumns: [
      'circle',
      'deviceOS',
      'appVersion',
      'loginType',
      'nightDataPackTitle',
      'selectBrand',
      'promcode',
      'updatedAt',
      'rank',
      'status',
    ],
  },
  fields: [
    {
      name: 'nightDataPackTitle',
      label: 'Night Data Pack Title',
      type: 'text',
      required: false,
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
      label: 'Login Type',
      type: 'select',
      options: enumToOptions(LoginTypes),
      required: false,
      admin: {
        style: {
          width: '45%',
          display: 'inline-block',
          marginRight: '4%',
        },
      },
    },
    {
      name: 'selectBrand',
      label: 'Select Brand',
      type: 'select',
      options: enumToOptions(Brands),
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
      name: 'circle',
      type: 'select',
      label: 'Circle',
      required: true,
      admin: {
        style: {
          width: '45%',
          display: 'inline-block',
          marginRight: '4%',
        },
      },
      options: enumToOptions(States),
    },
    {
      name: 'promotionalValue',
      label: 'Promotional Value',
      type: 'number',
      admin: {
        style: {
          width: '45%',
          display: 'inline-block',
          marginRight: '4%',
        },
      },
    },
    {
      name: 'description',
      label: 'Description',
      type: 'textarea',
      admin: {
        style: {
          width: '45%',
          display: 'inline-block',
          marginRight: '4%',
        },
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
      name: 'promoType',
      label: 'Promo Type',
      type: 'select',
      options: [
        { label: 'Type A', value: 'typeA' },
        { label: 'Type B', value: 'typeB' },
      ],
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
      name: 'validText',
      label: 'Valid Text',
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
      name: 'promocode',
      label: 'Promocode',
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
      name: 'timing',
      label: 'Timing',
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
      name: 'validDate',
      label: 'Valid Date',
      type: 'date',
      admin: {
        style: {
          width: '45%',
          display: 'inline-block',
          marginRight: '4%',
        },
      },
    },
    {
      name: 'tyPageText',
      label: 'TY Page Text',
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
      name: 'tncTitle',
      label: 'TnC Title',
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
      name: 'tncDetails',
      label: 'TnC Details',
      type: 'textarea',
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
      options: enumToOptions(DeviceOs),
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
      name: 'appVersion',
      label: 'App Version',
      type: 'relationship',
      relationTo: 'app_version',
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
      name: 'rank',
      label: 'Rank',
      type: 'select',
      options: enumToOptions(Rank as unknown as Record<string, string>),
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
      name: 'status',
      label: 'Status',
      type: 'radio',
      options: [
        { label: 'Active', value: 'active' },
        { label: 'Inactive', value: 'inactive' },
      ],
      required: true,
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

export default ManageNightPack
