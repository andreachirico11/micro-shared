import { log_info } from "./log";

export class NodeTlsHandler {
  static disableTls() {
    if (!this.activated) return;
    log_info('Disabling tls');
    this.tls = false;
  }

  static enableTls() {
    if (!this.activated) return;
    log_info('Enabling tls');
    this.tls = true;
  }

  private static set tls(value: boolean) {
    process.env.NODE_TLS_REJECT_UNAUTHORIZED = value ? '1' : '0';
  }

  private static activated = null;

  static setup(isActivated: boolean) {
    if (this.activated !== null) return;
    this.activated = isActivated;
  }
}
