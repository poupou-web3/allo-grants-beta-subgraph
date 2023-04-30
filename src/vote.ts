import {
  Voted as VotedEvent
} from "../generated/vote/vote"
import { Vote } from "../generated/schema"

export function handleVoted(event: VotedEvent): void {
  let entity = new Vote(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.token = event.params.token
  entity.amount = event.params.amount
  entity.voter = event.params.voter
  entity.grantAddress = event.params.grantAddress
  entity.projectId = event.params.projectId
  entity.roundAddress = event.params.roundAddress

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
