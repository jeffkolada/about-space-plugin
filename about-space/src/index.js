import { BasePlugin, BaseComponent } from 'vatom-spaces-plugins'

/**
 * This is the main entry point for your plugin.
 *
 * All information regarding plugin development can be found at
 * https://developer.vatom.com/plugins/plugins/
 *
 * @license MIT
 * @author Vatom Inc.
 */
export default class MyPlugin extends BasePlugin {

    /** Plugin info */
    static id = "aboutspace"
    static name = "About Space Plugin"
    static description = "Info and Creative Commons Attribution"

    /** Called on load */
    onLoad() {

        // Create a button in the toolbar
        this.menus.register({
            icon: this.paths.absolute('button-icon.png'),
            text: 'About Space',
            action: () => this.onButtonPress()
        })


    this.menus.register({
        id: 'about-space-config',
        section: 'file-menu',
        title: 'About Space Edit',
        panel: {
            fields: [
                { type: 'section', name: 'About Space' },
                { type: 'text', id: 'about-title', name: 'Title', help: 'Title of your space' },
                { type: 'textarea', id: 'about-description', name: 'Description', help: 'A short description about your space'},
                { type: 'text', id: 'text', name: 'Text', help: 'Text to display in the message.' }
            ]}
        })
    }

    /** Called when the user presses the action button */
    onButtonPress() {

        // Show alert
        this.menus.displayPopup({
            title: 'About Space',
            panel: {
                iframeURL: this.paths.absolute('./popup.html'),
                width: 1200,
                height: 800
            }
        })

    }

}
