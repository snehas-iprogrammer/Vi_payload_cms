import { Brands } from '@/enums/brands'
import { Status } from '@/enums/common'
import { DeviceOs } from '@/enums/deviceOs'
import LoginTypes from '@/enums/loginTypes'
import { States } from '@/enums/states'
import { enumToOptions } from '@/utils/enumToOptions'
import { CollectionConfig } from 'payload'

const ManageRechargeOffers: CollectionConfig = {
  slug: 'manage_recharge_offers',
  labels: {
    singular: 'Manage Recharge Offer',
    plural: 'Manage Recharge Offers',
  },
  admin: {
    group: 'Page Management',
    defaultColumns: ['loginType', 'brand', 'circle', 'deviceOS', 'appVersion', 'status'],
  },
  fields: [
    {
      name: 'circle',
      type: 'select',
      label: 'Circle',
      options: enumToOptions(States),
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
      name: 'loginType',
      label: 'Login Type',
      type: 'select',
      options: enumToOptions(LoginTypes),
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
      name: 'brand',
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
      name: 'deviceOS',
      type: 'select',
      label: 'Device OS',
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
      name: 'whiteListedMRPs',
      type: 'text',
      label: 'White Listed MRPs',
      admin: {
        style: {
          width: '45%',
          display: 'inline-block',
          marginRight: '4%',
        },
      },
    },
    {
      name: 'viSuperHeroMRPs',
      type: 'text',
      label: 'Vi Super Hero MRPs',
      admin: {
        style: {
          width: '45%',
          display: 'inline-block',
          marginRight: '4%',
        },
      },
    },
    {
      name: 'superHeroReccoRailMRPs',
      type: 'text',
      label: 'Super Hero Recco Rail MRPs',
      admin: {
        style: {
          width: '45%',
          display: 'inline-block',
          marginRight: '4%',
        },
      },
    },
    {
      name: 'nonStopHeroMRPs',
      type: 'text',
      label: 'Non Stop Hero MRPs',
      admin: {
        style: {
          width: '45%',
          display: 'inline-block',
          marginRight: '4%',
        },
      },
    },
    {
      name: 'nonStopHeroReccoRailMRPs',
      type: 'text',
      label: 'Non Stop Hero Recco Rail MRPs',
      admin: {
        style: {
          width: '45%',
          display: 'inline-block',
          marginRight: '4%',
        },
      },
    },
    {
      name: 'isAutoScrollEnabled',
      type: 'radio',
      label: 'Is Auto Scroll Enabled',
      admin: {
        style: {
          width: '45%',
          display: 'inline-block',
          marginRight: '4%',
        },
      },
      defaultValue: 'yes',
      options: [
        { label: 'Yes', value: 'yes' },
        { label: 'No', value: 'no' },
      ],
      required: true,
    },
    {
      name: 'autoScrollTime',
      type: 'number',
      label: 'Auto Scroll Time',
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
      name: 'weekendRolloverMRPs',
      type: 'text',
      label: 'Weekend Rollover MRPs',
      admin: {
        style: {
          width: '45%',
          display: 'inline-block',
          marginRight: '4%',
        },
      },
    },
    {
      name: 'hotstarPrepaidMRPs',
      type: 'text',
      label: 'Hotstar Prepaid MRPs',
      admin: {
        style: {
          width: '45%',
          display: 'inline-block',
          marginRight: '4%',
        },
      },
    },
    {
      name: '5GLowerTopupMRP',
      type: 'text',
      label: '5G Lower Topup MRP',
      admin: {
        style: {
          width: '45%',
          display: 'inline-block',
          marginRight: '4%',
        },
      },
    },
    {
      name: '5GHigherTopupMRP',
      type: 'text',
      label: '5G Higher Topup MRP',
      admin: {
        style: {
          width: '45%',
          display: 'inline-block',
          marginRight: '4%',
        },
      },
    },
    {
      name: 'hotstarMRPs',
      type: 'text',
      label: ' Hotstar MRPs',
      admin: {
        style: {
          width: '45%',
          display: 'inline-block',
          marginRight: '4%',
        },
      },
    },
    {
      name: 'othersMRPs',
      type: 'text',
      label: 'Others MRPs',
      admin: {
        style: {
          width: '45%',
          display: 'inline-block',
          marginRight: '4%',
        },
      },
    },
    {
      name: 'hotstarCardLowerBannerPackMRPs',
      type: 'text',
      label: 'Hotstar Card Lower Banner Pack MRPs',
      admin: {
        style: {
          width: '45%',
          display: 'inline-block',
          marginRight: '4%',
        },
      },
    },
    {
      name: 'packCardTwoColHotstarVIPPackMRPs',
      label: 'Pack Card Two Col Hotstar VIP Pack MRPs',
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
      name: 'packCardPromotionalValueMRPs',
      type: 'text',
      label: 'Pack Card Promotional Value MRPs',
      admin: {
        style: {
          width: '45%',
          display: 'inline-block',
          marginRight: '4%',
        },
      },
    },
    {
      name: 'heroUnlimitedMRPs',
      type: 'text',
      label: 'Hero Unlimited MRPs',
      admin: {
        style: {
          width: '45%',
          display: 'inline-block',
          marginRight: '4%',
        },
      },
    },
    {
      name: 'planVoucherMRPs',
      type: 'text',
      label: 'Plan Voucher MRPs',
      admin: {
        style: {
          width: '45%',
          display: 'inline-block',
          marginRight: '4%',
        },
      },
    },
    {
      name: 'lastRechargesMRPs',
      type: 'text',
      label: 'Last Recharges MRPs',
      admin: {
        style: {
          width: '45%',
          display: 'inline-block',
          marginRight: '4%',
        },
      },
    },
    {
      name: 'uLTabCircleList',
      label: 'UL Tab Circle List',
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
      name: 'recommandedTabBottomStripText',
      label: 'Recommended Tab Bottom Strip Text',
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
      name: 'viGuaranteeBottomStripText',
      type: 'text',
      label: 'Vi Guarantee Bottom Strip Text',
      admin: {
        style: {
          width: '45%',
          display: 'inline-block',
          marginRight: '4%',
        },
      },
    },
    {
      name: 'isUnlimited5GEnabled',
      type: 'radio',
      label: 'Is Unlimited 5G Enabled',
      defaultValue: Status.Active,
      admin: {
        style: {
          width: '45%',
          display: 'inline-block',
          marginRight: '4%',
        },
      },
      options: enumToOptions(Status),

      required: true,
    },
    {
      name: 'status',
      label: 'Status',
      type: 'radio',
      options: enumToOptions(Status),
      defaultValue: Status.Active,
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

export default ManageRechargeOffers
