// Type definitions for Tableau JavaScript API
declare namespace tableau {
  // New Embedding API (v3+)
  interface VizOptions {
    container: HTMLElement;
    src: string;
    hideTabs?: boolean;
    hideToolbar?: boolean;
    onFirstInteractive?: () => void;
    onFirstVizSizeKnown?: (event: any) => void;
    width?: string;
    height?: string;
  }

  // Legacy API (pre-v3)
  interface LegacyVizOptions {
    hideTabs?: boolean;
    hideToolbar?: boolean;
    onFirstInteractive?: () => void;
    onFirstVizSizeKnown?: (event: any) => void;
    width?: string;
    height?: string;
  }

  // Viz class for legacy API
  class Viz {
    constructor(container: HTMLElement, url: string, options?: LegacyVizOptions);
    dispose(): void;
  }

  // VizManager for new API
  class VizManager {
    createViz(options: VizOptions): any;
  }
}

declare global {
  interface Window {
    tableau: {
      // New API
      VizManager?: new () => tableau.VizManager;
      // Legacy API
      Viz?: typeof tableau.Viz;
    };
  }
}
