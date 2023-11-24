import MenuPickerController from './controllers/MenuPickerController.js';

class App {
  async run() {
    const controller = new MenuPickerController();
    await controller.run();
  }
}

export default App;
