import { Brands } from '@/enums/brands'
import { Status } from '@/enums/common'
import { enumToOptions } from '@/utils/enumToOptions'
import { sqlID } from '@/utils/lib/sqlId'
import { CollectionConfig } from 'payload'

const BannerManage: CollectionConfig = {
  slug: 'banner_manage',
  labels: {
    singular: 'Banner Manage',
    plural: 'Banner Manages',
  },
  admin: {
    group: 'Banners',
    useAsTitle: 'banner_screen',
    // defaultColumns: ['screenName', 'title', 'isTimestampCheck', 'isComponent', 'status'],
  },
  hooks: {
    beforeChange: [
      async ({ data, operation }) => {
        return sqlID({ sequence: 'banner_manage', data, operation })
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
      name: 'banner_screen',
      type: 'relationship',
      label: 'Select Screen',
      relationTo: 'banner_screen', // Corrected the collection slug for screens
      required: true,
    },
    {
      name: 'circle',
      type: 'select',
      label: 'Circle',
      options: [
        { label: 'North', value: 'north' },
        { label: 'South', value: 'south' },
        { label: 'East', value: 'east' },
        { label: 'West', value: 'west' },
      ],
      required: true,
    },
    {
      name: 'brand',
      type: 'select',
      label: 'Brand',
      options: enumToOptions(Brands),
      required: true,
    },
    {
      name: 'login_type',
      type: 'select',
      label: 'Login Type',
      options: [
        { label: 'Primary', value: 'primary' },
        { label: 'Secondary', value: 'secondary' },
        { label: 'Both', value: 'both' },
      ],
      required: true,
    },

    {
      name: 'lob',
      type: 'select',
      label: 'Line of Business (LOB)',
      options: [
        { label: 'LOB 1', value: 'lob-1' },
        { label: 'LOB 2', value: 'lob-2' },
        { label: 'LOB 3', value: 'lob-3' },
      ],
      required: true,
    },
    {
      name: 'notified_internal_link',
      type: 'text',
      label: 'Notified Internal Link',
      admin: {
        description: 'Enter internal link Eg. /recharge',
      },
      required: false,
    },
    {
      name: 'is_notified',
      type: 'radio',
      label: 'Is Notified',
      options: enumToOptions(Status),
      required: true,
    },
    {
      name: 'device_os',
      type: 'select',
      label: 'Device OS',
      admin: {
        description: 'Select the device OS',
      },
      options: enumToOptions(Status),
      required: false,
    },
    {
      name: 'app_version',
      type: 'relationship',
      label: 'App Version',
      hasMany: true,
      relationTo: 'app_version', // Corrected the collection slug for screens
      required: false,
    },
    {
      name: 'banner_rank',
      type: 'select',
      label: 'Banner Rank',
      options: [
        { label: 'Rank 1', value: 'rank-1' },
        { label: 'Rank 2', value: 'rank-2' },
        { label: 'Rank 3', value: 'rank-3' },
      ],
      required: false,
    },
    {
      name: 'status',
      type: 'radio',
      label: 'Status',
      options: enumToOptions(Status),
      required: true,
    },
  ],
}

export default BannerManage
