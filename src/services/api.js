import { request, requestPost } from "./request.js";

export const getGroupDetailInfo = (params) => {
  return request(
    `/b2/blockchain/getGroupDetailInfo?UserAddress=${params}`,
    "get"
  );
};

export const getScore = (params) => {
  return request(`/b2/blockchain/getScore?UserAddress=${params}`, "get");
};

export const getJoinGroup = (params) => {
  return request(`/b2/blockchain/getJoinGroup?UserAddress=${params}`, "get");
};

export const getGroupList = ({ Offset, Limit }) => {
  return request(
    `/b2/blockchain/getGroupList?Offset=${Offset}&Limit=${Limit}`,
    "get"
  );
};

export const getTokenLogo = () => {
  return request(`/b2/blockchain/getTokenLogo`, "get");
};

export const getGroupScoreRank = ({ Offset, Limit, groupName }) => {
  return request(
    `/b2/blockchain/getGroupScoreRank?Offset=${Offset}&Limit=${Limit}&GroupName=${groupName}`,
    "get"
  );
};

export const getScoreRank = ({ Offset, Limit }) => {
  return request(
    `/b2/blockchain/getScoreRank?Offset=${Offset}&Limit=${Limit}`,
    "get"
  );
};

export const getGroupTVLRank = () => {
  return request(`/b2/blockchain/getGroupTVLRank`, "get");
};

export const getPersonalTVLRank = () => {
  return request(`/b2/blockchain/getPersonalTVLRank`, "get");
};

export const getLastScoreRank = ({ Offset, Limit }) => {
  return request(
    `/b2/blockchain/getLastScoreRank?Offset=${Offset}&Limit=${Limit}`,
    "get"
  );
};

export const getGroupSearch = (groupName) => {
  return request(
    `/b2/blockchain/getGroupSearch?TokenSymbol=${groupName}`,
    "get"
  );
};

// 获取桥的记录列表
export const getBridgeList = ({ BridgeType, UserAddress, Offset, Limit }) => {
  return request(
    `/b2/stake/getBridgeList?BridgeType=${BridgeType}&UserAddress=${UserAddress}&Offset=${Offset}&Limit=${Limit}`,
    "get"
  );
};

export const doBridge = ({
  BridgeFromAddress,
  BridgeType,
  BridgeTokenSymbol,
  BridgeTokenBalance,
  BridgeTxHash,
  BridgeToAddress,
}) => {
  return request(
    `/b2/stake/doBridge?BridgeFromAddress=${BridgeFromAddress}&BridgeType=${BridgeType}&BridgeTokenSymbol=${BridgeTokenSymbol}&BridgeTokenBalance=${BridgeTokenBalance}&BridgeTxHash=${BridgeTxHash}&BridgeToAddress=${BridgeToAddress}`,
    "get"
  );
};

export const getTotalStakeInfo = () => {
  return request(`/b2/stake/getTotalStakeInfo`, "get");
};

export const getBRCList = () => {
  return request(`/b2/stake/getBRCList`, "get");
};

export const getWalletStakeInfo = ({ UserAddress }) => {
  return request(
    `/b2/stake/getWalletStakeInfo?UserAddress=${UserAddress}`,
    "get"
  );
};

export const getSakeList = ({ UserAddress }) => {
  return request(`/b2/stake/getSakeList?UserAddress=${UserAddress}`, "get");
};

export const getTreasure = ({ UserAddress }) => {
  return request(`/b2/stake/getTreasure?UserAddress=${UserAddress}`, "get");
};

export const doStake = ({
  UserAddress,
  StakeTokenSymbol,
  StakeTokenBalance,
  StakeTxHash,
}) => {
  return request(
    `/b2/stake/doStake?UserAddress=${UserAddress}&StakeTokenSymbol=${StakeTokenSymbol}&StakeTokenBalance=${StakeTokenBalance}&StakeTxHash=${StakeTxHash}`,
    "get"
  );
};

export const getTVLStatus = ({ StakeTokenSymbol, StakeTokenBalance }) => {
  return request(
    `/b2/stake/getTVLStatus?StakeTokenSymbol=${StakeTokenSymbol}&StakeTokenBalance=${StakeTokenBalance}`,
    "get"
  );
};

export const checkAddressMapping = ({ BtcAddress, EthAddress }) => {
  return request(
    `/b2/stake/checkAddressMapping?BtcAddress=${BtcAddress}&EthAddress=${EthAddress}`,
    "get"
  );
};

export const insertAddressMapping = ({ BtcAddress, EthAddress }) => {
  return request(
    `/b2/stake/insertAddressMapping?BtcAddress=${BtcAddress}&EthAddress=${EthAddress}`,
    "get"
  );
};

export const getETHContractAddress = ({ TokenSymbol }) => {
  return request(
    `/b2/stake/getETHContractAddress?TokenSymbol=${TokenSymbol}`,
    "get"
  );
};

export const getTransferInfo = ({ TokenSymbol, TokenBalance }) => {
  return request(
    `/b2/stake/getTransferInfo?TokenSymbol=${TokenSymbol}&TokenBalance=${TokenBalance}`,
    "get"
  );
};

export const checkRuningStatus = () => {
  return request(`/b2/common/checkRuningStatus`, "get");
};

export const checkNftStatus = ({ InscriptionID }) => {
  return request(
    `/b2/nft/checkNftStatus?InscriptionID=${InscriptionID}`,
    "get"
  );
};

export const getNftGroupList = () => {
  return request(`/b2/nft/getGroupList`, "get");
};

export const doUseNft = ({ UserAddress, UsedGroup, InscriptionID }) => {
  return request(
    `/b2/nft/doUseNft?UserAddress=${UserAddress}&UsedGroup=${UsedGroup}&InscriptionID=${InscriptionID}`,
    "get"
  );
};

export const doUseNftPost = ({
  BTCAddress,
  ETHAddress,
  UsedGroup,
  InscriptionID,
}) => {
  return requestPost(`/b2/nft/doUseNftPost`, "post", {
    BTCAddress,
    ETHAddress,
    UsedGroup,
    InscriptionID,
  });
};

export const getNftGroupDetailInfo = ({ UserAddress }) => {
  return request(
    `/b2/nft/getNftGroupDetailInfo?UserAddress=${UserAddress}`,
    "get"
  );
};

export const getNftScore = ({ UserAddress }) => {
  return request(`/b2/nft/getNftScore?UserAddress=${UserAddress}`, "get");
};

export const getTokenContract = ({ UserAddress }) => {
  return request(
    `/b2/blockchain/getTokenContract?UserAddress=${UserAddress}`,
    "get"
  );
};

export const addCustomerToken = ({
  UserAddress,
  TokenSymbol,
  TokenContractAddress,
}) => {
  return requestPost(`/b2/blockchain/addCustomerToken`, "post", {
    UserAddress,
    TokenSymbol,
    TokenContractAddress,
  });
};

export const getTotalTokenContract = () => {
  return request(`/b2/stake/getTotalTokenContract`, "get");
};

export const getAssetList = ({ EthAddress, ContractType }) => {
  let url;
  if (ContractType) {
    url = `/b2/withdraw/withdrawAssetList?EthAddress=${EthAddress}&ContractType=${ContractType}`;
  } else {
    url = `/b2/withdraw/withdrawAssetList?EthAddress=${EthAddress}`;
  }
  return request(url, "get");
};

export const doWithdraw = ({
  StakeAddress,
  StakeSymbol,
  StakeTokenStatus,
  Txhash,
}) => {
  return requestPost(`/b2/withdraw/doWithdraw`, "post", {
    StakeAddress,
    StakeSymbol,
    StakeTokenStatus,
    Txhash,
  });
};
