import { IParser, ParseResult, MessageType } from 'openmts-common';

class LocationParser implements IParser {
  accept(message: Buffer): boolean {
    const header: number = message.readInt16BE(0);
    const length: number = message.readInt8(2)
    const type: number = message.readInt8(3)
    return header === 0x7878 && type === 0x22 && length === 0x22;
  }  
  
  
  //[0x78, 0x78, 0x22, 0x22, 0x13, 0x0c, 0x1a, 0x13, 0x02, 0x2c, 0xc3, 0x04, 0x64, 0xe1, 0x30, 0x03, 0x1f, 0x9b, 0xe0, 0x01, 0x04, 0x7f, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x01, 0x03, 0x00, 0x00, 0x00, 0xe4, 0x11, 0x0d, 0x0a]
  //[0x78, 0x78, 0x22, 0x22, 0x13, 0x0c, 0x1a, 0x13, 0x03, 0x25, 0xc3, 0x04, 0x64, 0xe1, 0xe0, 0x03, 0x1f, 0x9a, 0xec, 0x00, 0x14, 0x3e, 0x01, 0x1e, 0x03, 0x82, 0x7c, 0x00, 0x86, 0x31, 0x01, 0x05, 0x01, 0x00, 0x0c, 0xcb, 0x07, 0x0d, 0x0a]
  parse(message: Buffer, ip: string): Promise<ParseResult> {
    throw new Error("Method not implemented.");
  }

}