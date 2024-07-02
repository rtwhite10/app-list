import { LoremIpsum } from "lorem-ipsum";

export type AppData = {
  id: number;
  name: string;
  tagline: string;
  imageUrl: string;
  metadata: {
    imageSize: number;
    stack?: boolean;
  }
}

export type AppTray = {
  title: string;
  apps: AppData[]
}

export type PageData = {
  title: string;
  appTrays: AppTray[]
}

export type AvailableFilters = {
  category: string;
}

export type LayoutData = {
  availableFilters: AvailableFilters[]
}

class AppList {
  async getPageData(page: string, take: number) {
    const mockApi: Promise<PageData> = new Promise((resolve, reject) => {
      resolve({
        title: page,
        appTrays: [
        {
          title: "Apps we love",
          apps: this.#createAppData(2, 300, true),
        },
        {
          title: "These will blow your mind!",
          apps: this.#createAppData(take, 50),
        },
        {
          title: "Best new",
          apps: this.#createAppData(take, 50),
        },
        {
          title: "Essentials",
          apps: this.#createAppData(take, 50),
        },
        ]
      })
      reject(() => {
        throw new Error("big error encountered")
      })
    })
    return mockApi
  }

  async getLayoutData() {
    const mockApi: Promise<LayoutData> = new Promise((resolve, reject) => {
      resolve({
        availableFilters: [{category: "Discover", }, {category: "Arcade", }, {category: "Create", }, {category: "Work", }, {category: "Play", }, {category: "Develop", }]
      })
      reject(() => {
        throw new Error("big error encountered")
      })
    })
    return mockApi
  }

  #createAppData(take: number, imageSize: number, stack?: true) {
    const lorem = new LoremIpsum({
      wordsPerSentence: {
        max: 4,
        min: 2
      }
    })
    return Array.apply(null, Array(take)).map((_, id) => ({
      id,
      name: lorem.generateWords(2),
      tagline: lorem.generateSentences(1),
      imageUrl: `https://picsum.photos/${imageSize}`,
      metadata: {
        stack,
        imageSize,
      }
    }))
  }
}

export const appListV1 = new AppList();