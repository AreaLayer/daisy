declare enum NostrEventKind {
  Metadata = 0,
  Text = 1,
  RelayRec = 2,
  Contacts = 3,
  DM = 4,
  Deleted = 5,
}

declare interface NostrBaseEvent {
  created_at: number
  id: string
  pubkey: string
  tags: string[][]
  sig: string
  content: string
}

declare interface NostrNoteEvent extends NostrBaseEvent {
  kind: 42
}

declare interface NostrProfileEvent extends NostrBaseEvent {
  kind: 0
}

declare type NostrEvent = NostrNoteEvent | NostrProfileEvent

declare type NostrProfile = NostrNoteEvent & {
  picture?: string
  name?: string
  about?: string
}

declare interface NostrFilter {
  ids?: string[]
  kinds?: NostrEventKind[]
  authors?: string[]
  since?: number
  until?: number
  "#e"?: string[]
  "#p"?: string[]
  limit?: number
}
