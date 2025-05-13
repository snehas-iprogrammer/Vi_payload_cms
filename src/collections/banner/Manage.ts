import { Brands } from '@/enums/brands'
import { CircleList } from '@/enums/circlelist'
import { Status } from '@/enums/common'
import { DeviceOs } from '@/enums/deviceos'
import { LinksList } from '@/enums/linkslist'
import { LOB } from '@/enums/lob'
import LoginTypes from '@/enums/logintypes'
import { PlanList } from '@/enums/planlist'
import { PostPaidPersona } from '@/enums/postpaidpersona'
import { PrepaidPersona } from '@/enums/prepaidpersona'
import { Rank } from '@/enums/rank'
import { RedHierarchy } from '@/enums/redhierarchy'
import { ServiceTypeList } from '@/enums/servicetypelist'
import { SocId } from '@/enums/socId'
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
      options: enumToOptions(CircleList),
      required: true,
      hasMany: true,
      admin: {
        style: {
          width: '45%',
          display: 'inline-block',
          marginRight: '4%',
        },
      },
    },
    {
      name: 'login_type',
      type: 'select',
      label: 'Login Type',
      options: enumToOptions(LoginTypes),
      // required: true,
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
      name: 'lob',
      type: 'select',
      label: 'LOB',
      options: enumToOptions(LOB),
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
      name: 'plan',
      type: 'select',
      label: 'Plan',
      options: enumToOptions(PlanList),
      // required: true,
      admin: {
        style: {
          width: '45%',
          display: 'inline-block',
          marginRight: '4%',
        },
      },
    },
    {
      name: 'prepaid_persona',
      type: 'select',
      label: 'Prepaid Persona',
      options: enumToOptions(PrepaidPersona),
      // required: true,
      hasMany: true,
      admin: {
        style: {
          width: '45%',
          display: 'inline-block',
          marginRight: '4%',
        },
      },
    },
    {
      name: 'postpaid_persona',
      type: 'select',
      label: 'Postpaid Persona',
      options: enumToOptions(PostPaidPersona),
      // required: true,
      hasMany: true,
      admin: {
        style: {
          width: '45%',
          display: 'inline-block',
          marginRight: '4%',
        },
      },
    },
    {
      name: 'socid_include_exclude',
      type: 'select',
      label: 'Select SocId Include or Exclude',
      options: enumToOptions(SocId),
      // required: true,
      // defaultValue: SocId.Include,
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
      label: 'Enter SocId',
      type: 'text',
      // required: true,
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
      name: 'banner_title',
      label: 'Banner Title',
      type: 'text',
      required: true,
      admin: {
        style: {
          width: '45%',
          display: 'inline-block',
          marginRight: '4%',
        },
        description: 'Enter banner title Eg. Postpaid Plan',
      },
    },
    {
      name: 'subtitle',
      label: 'Banner Subtitle',
      type: 'text',
      // required: true,
      admin: {
        style: {
          width: '45%',
          display: 'inline-block',
          marginRight: '4%',
        },
        description: 'Enter banner subtitle Eg. Postpaid Plan',
      },
    },
    {
      name: 'analytics_tag',
      label: 'Analytics tag',
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
      name: 'country',
      label: 'country',
      type: 'text',
      // required: true,
      admin: {
        style: {
          width: '45%',
          display: 'inline-block',
          marginRight: '4%',
        },
      },
    },
    {
      name: 'banner_size',
      label: 'Banner Size',
      type: 'text',
      // required: true,
      admin: {
        style: {
          width: '45%',
          display: 'inline-block',
          marginRight: '4%',
        },
      },
    },
    {
      name: 'red_hierarchy',
      type: 'select',
      label: 'Red Hierarchy',
      options: enumToOptions(RedHierarchy),
      required: true,
      hasMany: true,
      admin: {
        style: {
          width: '45%',
          display: 'inline-block',
          marginRight: '4%',
        },
      },
    },
    {
      name: 'mrp',
      type: 'text',
      label: 'MRP',
      admin: {
        style: {
          width: '45%',
          display: 'inline-block',
          marginRight: '4%',
        },
      },
      required: false,
    },
    {
      name: 'tnc_title',
      type: 'text',
      label: 'Cashback Banner TnC',
      admin: {
        style: {
          width: '45%',
          display: 'inline-block',
          marginRight: '4%',
        },
      },
      required: false,
    },
    {
      name: 'tnc_details',
      type: 'text',
      label: 'Cashback Banner Tnc Details',
      admin: {
        style: {
          width: '45%',
          display: 'inline-block',
          marginRight: '4%',
        },
      },
      required: false,
    },
    {
      name: 'link_type',
      type: 'select',
      label: 'Link Type',
      options: enumToOptions(LinksList),
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
      name: 'internal_link',
      type: 'text',
      required: false,
      label: 'Internal Link',
      admin: {
        // disabled: true,
        condition: (data, siblingData, { user }) => {
          // Enable only when type is 'custom'
          return siblingData.link_type === '1'
        },
        style: {
          width: '45%',
          display: 'inline-block',
          marginRight: '4%',
        },
      },
    },
    {
      name: 'external_link',
      type: 'text',
      required: false,
      label: 'External Link',
      admin: {
        condition: (data, siblingData, { user }) => {
          // Enable only when type is 'custom'
          return siblingData.link_type === '2'
        },
        // disabled: true,
        style: {
          width: '45%',
          display: 'inline-block',
          marginRight: '4%',
        },
      },
    },
    {
      name: 'campaign_id',
      type: 'text',
      required: false,
      label: 'Campaign Id',
      admin: {
        description: 'Enter - if internal link is cyb plan related else blank',
        style: {
          width: '45%',
          display: 'inline-block',
          marginRight: '4%',
        },
      },
    },
    {
      name: 'utility_high_priority_biller_id',
      type: 'text',
      required: false,
      label: 'High Priority Billers for utilities',
      admin: {
        style: {
          width: '45%',
          display: 'inline-block',
          marginRight: '4%',
        },
      },
    },
    {
      name: 'express_sequence',
      type: 'text',
      required: false,
      label: 'Express Sequence',
      admin: {
        style: {
          width: '45%',
          display: 'inline-block',
          marginRight: '4%',
        },
      },
    },
    {
      name: 'service_type',
      label: 'Service Type',
      type: 'select',
      options: enumToOptions(ServiceTypeList),
      required: true,
      hasMany: true,
      admin: {
        style: {
          width: '45%',
          display: 'inline-block',
          marginRight: '4%',
        },
      },
    },
    {
      name: 'start_date_time',
      label: 'Schedule Start Date',
      type: 'date',
      admin: {
        date: {
          pickerAppearance: 'dayAndTime', // Enables picking both date and time
        },
        style: {
          width: '45%',
          display: 'inline-block',
          marginRight: '4%',
        },
      },
      required: false,
    },
    {
      name: 'end_date_time',
      label: 'Schedule End Date',
      type: 'date',
      admin: {
        date: {
          pickerAppearance: 'dayAndTime', // Enables picking both date and time
        },
        style: {
          width: '45%',
          display: 'inline-block',
          marginRight: '4%',
        },
      },
      required: false,
    },
    {
      name: 'description',
      type: 'textarea',
      required: false,
      label: 'Description',
      admin: {
        style: {
          width: '45%',
          display: 'inline-block',
          marginRight: '4%',
        },
      },
    },
    {
      name: 'subheader',
      type: 'text',
      required: false,
      label: 'Subheader After Active',
      admin: {
        style: {
          width: '45%',
          display: 'inline-block',
          marginRight: '4%',
        },
      },
    },
    {
      name: 'cta_name',
      type: 'text',
      required: false,
      label: 'Banner CTA',
      admin: {
        style: {
          width: '45%',
          display: 'inline-block',
          marginRight: '4%',
        },
      },
    },
    {
      name: 'coupon_code',
      type: 'text',
      required: false,
      label: 'Coupon Code',
      admin: {
        style: {
          width: '45%',
          display: 'inline-block',
          marginRight: '4%',
        },
      },
    },
    {
      name: 'validity_period',
      type: 'text',
      required: false,
      label: 'Validity Period',
      admin: {
        style: {
          width: '45%',
          display: 'inline-block',
          marginRight: '4%',
        },
      },
    },
    {
      name: 'banner_text_content',
      type: 'textarea',
      required: false,
      label: 'Banner Text Content',
      admin: {
        style: {
          width: '45%',
          display: 'inline-block',
          marginRight: '4%',
        },
      },
    },
    {
      name: 'notified_internal_link',
      type: 'text',
      label: 'Notified Internal Link',
      admin: {
        style: {
          width: '45%',
          display: 'inline-block',
          marginRight: '4%',
        },
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
      admin: {
        style: {
          width: '45%',
          display: 'inline-block',
          marginRight: '4%',
        },
      },
    },
    {
      name: 'device_os',
      type: 'select',
      label: 'Device OS',
      admin: {
        style: {
          width: '45%',
          display: 'inline-block',
          marginRight: '4%',
        },
      },
      options: enumToOptions(DeviceOs),
      required: true,
    },
    {
      name: 'app_version',
      type: 'relationship',
      label: 'App Version',
      hasMany: true,
      relationTo: 'app_version', // Corrected the collection slug for screens
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
      name: 'banner_rank',
      type: 'select',
      label: 'Banner Rank',
      options: enumToOptions(Rank),
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
    {
      name: 'comment',
      type: 'textarea',
      required: true,
      label: 'Update Comment',
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

export default BannerManage
