import { Status } from '@/enums/common'
import { enumToOptions } from '@/utils/enumToOptions'
import { sqlID } from '@/utils/lib/sqlId'
import { CollectionConfig } from 'payload'

const BannerScreens: CollectionConfig = {
  slug: 'banner_screen',
  labels: {
    singular: 'Banner Screen',
    plural: 'Banner Screens',
  },
  admin: {
    group: 'Banners',
    useAsTitle: 'screen_title',
    defaultColumns: ['screen_name', 'screen_title', 'is_timestamp_check', 'is_component', 'status'],
  },
  hooks: {
    beforeChange: [
      async ({ data, operation }) => {
        return sqlID({ sequence: 'banner_screen', data, operation })
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
      name: 'screen_name',
      type: 'text',
      label: 'Screen Name',
      required: true,
      admin: {
        description:
          'Enter banner name as DisneyHotstar_Rail1 for Rail1, for banner - DisneyHotstar_Banner, for Rail2 - DisneyHotstar_Rail2',
      },
    },
    {
      name: 'description',
      type: 'textarea',
      label: 'Screen description',
    },
    {
      name: 'screen_title',
      type: 'text',
      label: 'Screen Title',
      required: true,
    },
    {
      name: 'hi_screen_title',
      type: 'text',
      label: 'Hindi Screen Title',
    },
    {
      name: 'screen_header',
      type: 'text',
      label: 'Screen Header',
    },
    {
      name: 'screen_subheader',
      type: 'text',
      label: 'Screen Sub-header',
    },
    {
      name: 'is_timestamp_check',
      type: 'radio',
      label: 'Is Timestamp Check',
      options: enumToOptions(Status),
      defaultValue: Status.Active,
      required: true,
    },
    {
      name: 'is_component',
      type: 'radio',
      label: 'Is Component',
      options: enumToOptions(Status),
      defaultValue: Status.Active,

      required: true,
    },
    {
      name: 'status',
      type: 'radio',
      label: 'Status',
      options: enumToOptions(Status),
      defaultValue: Status.Active,
      required: true,
    },
  ],
}

export default BannerScreens
