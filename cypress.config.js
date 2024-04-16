const { defineConfig } = require("cypress");

module.exports = defineConfig({
  on: (on, config) => {
    // Настройки по умолчанию
    const defaultConfig = {
      viewportWidth: 1366,
      viewportHeight: 768,
    };
    // Конфигурация для 13-дюймового ноутбука
    const laptopConfig = {
      viewportWidth: 1366,
      viewportHeight: 768,
    };
    // Конфигурация для 24-дюймового монитора
    const monitorConfig = {
      viewportWidth: 192,
      viewportHeight: 108,
    };
    // Возвращаем объект конфигурации в зависимости от условий
    if (config.viewport === "laptop") {
      return { ...defaultConfig, ...laptopConfig };
    } else if (config.viewport === "monitor") {
      return { ...defaultConfig, ...monitorConfig };
    } else {
      return defaultConfig;
    }
  },
  projectId: "o6o887",
  e2e: {
    baseUrl: "https://santa-secret.ru",
    testIsolation: false,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  chromeWebSecurity: false,
  taskTimeout: 10000,
});
