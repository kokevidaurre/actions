import * as D from "../framework"

import {WebhookIntegration} from "./webhook"

export class TrayIntegration extends WebhookIntegration {

  constructor() {
    super()
    this.name = "tray"
    this.label = "Tray"
    this.iconName = "tray.svg"
    this.description = "Takes a data attachment and begins a Tray workflow"
    this.domain = "trayapp.io"
  }

  async form() {
    const form = new D.DataActionForm()
    form.fields = [{
      label: "Tray Webhook URL",
      name: "url",
      required: true,
      type: "string",
    }]
    return form
  }
}

D.addIntegration(new TrayIntegration())
