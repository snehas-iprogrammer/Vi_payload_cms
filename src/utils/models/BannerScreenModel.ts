import mongoose from 'mongoose'

const BannerScreenSchema = new mongoose.Schema({}, { strict: false })

const BannerScreenModel =
  mongoose.models.bannerScreen || mongoose.model('bannerScreen', BannerScreenSchema, 'banner_screens')

export default BannerScreenModel
