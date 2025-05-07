import { Status } from '@/enums/common'
import { Rank } from '@/enums/rank'
import { States } from '@/enums/states'
import { enumToOptions } from '@/utils/enumToOptions'
import { CollectionConfig } from 'payload'

const CircleWiseStateConfiguration: CollectionConfig = {
  slug: 'circlewise_state_configuration',
  labels: {
    singular: 'CircleWise State Configuration',
    plural: 'CircleWise State Configurations',
  },
  admin: {
    group: 'Page Management',
    defaultColumns: ['circle', 'stateId', 'stateCode', 'stateName', 'rank', 'status'],
  },
  fields: [
    {
      name: 'circle',
      type: 'select',
      options: enumToOptions(States),
      label: 'Circle',
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
      name: 'stateId',
      type: 'number',
      label: 'State ID',
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
      name: 'stateCode',
      type: 'text',
      label: 'State Code',
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
      name: 'stateName',
      type: 'text',
      label: 'State Name',
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
      type: 'select',
      options: enumToOptions(Rank as unknown as Record<string, string>),
      label: 'Rank',
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
      type: 'radio',
      defaultValue: 'active',
      label: 'Status',
      options: enumToOptions(Status),
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

export default CircleWiseStateConfiguration
