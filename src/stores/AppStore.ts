import { makeAutoObservable } from 'mobx'

export interface IAppStore {
  isGame: boolean
  mazeSize: number
  borderWidth: number
  cellSize: number
  cellSizeWithBorder: number
  isWin: boolean
  userSize: number

  setIsGame(value: boolean): void
  setMazeSize(width: number): void
  setIsWin(value: boolean): void
}

export class AppStore implements IAppStore {
  constructor() {
    makeAutoObservable(this)
  }

  isGame = false
  borderWidth = 1
  mazeSize = 6
  cellSize = 60
  isWin = false

  get cellSizeWithBorder(): number {
    return this.cellSize + this.borderWidth * 2
  }
  get userSize(): number {
    return this.cellSize
  }
  setIsGame(value: boolean): void {
    this.isGame = value
  }
  setMazeSize(width: number): void {
    this.mazeSize = width
  }
  setIsWin(value: boolean): void {
    this.isWin = value
  }
}
