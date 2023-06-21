// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "./TokenHive.sol";

contract BusinessLogic is TokenHive  {
    using Counters for Counters.Counter;

    Counters.Counter private _tokenIdCounter;
    Counters.Counter private _assetIdCounter;
    

    constructor() {}

   struct Asset {
        string name;
        string description;
        uint256 quantity;
        uint256 estimation;
        // Nft[] nfts;
    }

    struct Nft {
        string name;
        string metadata;
        string imageUrl;
        uint256 value;
    }


    struct KYC {
        string name;
        string email;
        string phone;
        string address1;
        string city;
        string country;
        bool approved;
    }

    mapping(address => KYC) private _kycs;
    mapping(address => bool) private _kycsApproved;
    mapping(uint256 => Asset) private _assets;
    mapping(uint256 => Nft) private _nfts;

    Asset[] public collections;

    

    event AssetTokenCreated(uint256 indexed tokenId, string assetName, string assetType, uint256 totalSupply);

    

    function createAssetToken(
    string memory _assetName, 
    string memory _desc, 
    string memory _uri,
    uint256 _qt, 
    uint256 _price
) external {
    uint256 collectionId = _assetIdCounter.current();
    uint256 tokenId = _tokenIdCounter.current();

    // Nft[] memory currentNft = new Nft[](_qt);  // Create a memory array of Nft structs

    require(_kycsApproved[msg.sender], "KYC needs to be done before");
    require(_qt > 0, "AssetToken: quantity must be greater than zero");

    for (uint256 i = 0; i < _qt; i++) {
        _tokenIdCounter.increment();
        safeMint(msg.sender, _uri, tokenId);
        _nfts[tokenId] = Nft("NFT", _assetName, _uri, (_price / _qt));
    }

    // Assign the memory array to the storage array
    _assets[collectionId] = Asset(_assetName, _desc, _qt, _price);
    collections.push(Asset(_assetName, _desc, _qt, _price));
    _assetIdCounter.increment();

    emit AssetTokenCreated(collectionId, _assetName, _desc, _qt);
}


    


    function verifyKYC(
        string memory name, 
        string memory email, 
        string memory phone, 
        string memory address1, 
        string memory city, 
        string memory country
        ) external {
        _kycs[msg.sender] = KYC(name, email, phone, address1, city, country, false);
    }

    function approveKYC(address account) external onlyOwner {
        _kycs[account].approved = true;
    }

    function getKYC(address account) external view returns (KYC memory) {
        return _kycs[account];
    }

    function getAsset(uint256 _tokenId) external view returns (Asset memory) {
        return _assets[_tokenId];
    }


    function transfert(address _to, uint256 _tokenId) external payable {
        require(_exists(_tokenId), 'AssetToken: token does not exist');
        require(_kycsApproved[msg.sender], "KYC need to be done before");
        require(msg.value >= _nfts[_tokenId].value, "AssetToken: value sent is not correct");
        payable(owner()).transfer(msg.value);
        safeTransferFrom(msg.sender, _to, _tokenId);
    }


}
//solcjs --bin --include-path node_modules/ --base-path . contracts/BusinessLogic.sol
//0x0000000000000000000000000000000000e29081