import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  '0x624225d1b8b8B6B7D60b09FB54B282E083fA2a7a'
);

export default instance;
