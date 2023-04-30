import {
  NewProjectApplication as NewProjectApplicationEvent,
  ProjectsMetaPtrUpdated as ProjectsMetaPtrUpdatedEvent,
} from "../generated/round/round"

import {
  Application,
  Project
} from "../generated/schema"

export function handleNewProjectApplication(
  event: NewProjectApplicationEvent
): void {

  let entity = new Application(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  
  entity.projectId = event.params.project
  entity.roundAddress = event.transaction.to!
  entity.metaPtrProtocol = event.params.applicationMetaPtr.protocol
  entity.metaPtrPointer = event.params.applicationMetaPtr.pointer
  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash
  entity.save()
}

export function handleProjectsMetaPtrUpdated(
  event: ProjectsMetaPtrUpdatedEvent
): void {
  let entity = new Project(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.roundAddress = event.transaction.to!
  entity.metaPtrProtocol = event.params.newMetaPtr.protocol
  entity.metaPtrPointer = event.params.newMetaPtr.pointer

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
