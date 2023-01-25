import { Injectable } from '@nestjs/common';
import Web3 from 'web3';

@Injectable()
export class AppService {
  private web3: Web3;

  constructor() {
    this.web3 = new Web3(
      new Web3.providers.HttpProvider(
        `https://api.covalenthq.com/v1/eth/${'ckey_cf3d00d81b114dbd92e8fd58851'}`,
      ),
    );
  }

  async getBalance(address: string): Promise<string> {
    return this.web3.eth.getBalance(address);
  }
}
