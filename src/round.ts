import {
  ApplicationMetaPtrUpdated as ApplicationMetaPtrUpdatedEvent,
  ApplicationStatusesUpdated as ApplicationStatusesUpdatedEvent,
  ApplicationsEndTimeUpdated as ApplicationsEndTimeUpdatedEvent,
  ApplicationsStartTimeUpdated as ApplicationsStartTimeUpdatedEvent,
  Initialized as InitializedEvent,
  MatchAmountUpdated as MatchAmountUpdatedEvent,
  NewProjectApplication as NewProjectApplicationEvent,
  PayFeeAndEscrowFundsToPayoutContract as PayFeeAndEscrowFundsToPayoutContractEvent,
  ProjectsMetaPtrUpdated as ProjectsMetaPtrUpdatedEvent,
  RoleAdminChanged as RoleAdminChangedEvent,
  RoleGranted as RoleGrantedEvent,
  RoleRevoked as RoleRevokedEvent,
  RoundEndTimeUpdated as RoundEndTimeUpdatedEvent,
  RoundFeeAddressUpdated as RoundFeeAddressUpdatedEvent,
  RoundFeePercentageUpdated as RoundFeePercentageUpdatedEvent,
  RoundMetaPtrUpdated as RoundMetaPtrUpdatedEvent,
  RoundStartTimeUpdated as RoundStartTimeUpdatedEvent
} from "../generated/round/round"
import {
  ApplicationMetaPtrUpdated,
  ApplicationStatusesUpdated,
  ApplicationsEndTimeUpdated,
  ApplicationsStartTimeUpdated,
  Initialized,
  MatchAmountUpdated,
  NewProjectApplication,
  PayFeeAndEscrowFundsToPayoutContract,
  ProjectsMetaPtrUpdated,
  RoleAdminChanged,
  RoleGranted,
  RoleRevoked,
  RoundEndTimeUpdated,
  RoundFeeAddressUpdated,
  RoundFeePercentageUpdated,
  RoundMetaPtrUpdated,
  RoundStartTimeUpdated
} from "../generated/schema"

export function handleApplicationMetaPtrUpdated(
  event: ApplicationMetaPtrUpdatedEvent
): void {
  let entity = new ApplicationMetaPtrUpdated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.oldMetaPtr_protocol = event.params.oldMetaPtr.protocol
  entity.oldMetaPtr_pointer = event.params.oldMetaPtr.pointer
  entity.newMetaPtr_protocol = event.params.newMetaPtr.protocol
  entity.newMetaPtr_pointer = event.params.newMetaPtr.pointer

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleApplicationStatusesUpdated(
  event: ApplicationStatusesUpdatedEvent
): void {
  let entity = new ApplicationStatusesUpdated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.index = event.params.index
  entity.status = event.params.status

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleApplicationsEndTimeUpdated(
  event: ApplicationsEndTimeUpdatedEvent
): void {
  let entity = new ApplicationsEndTimeUpdated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.oldTime = event.params.oldTime
  entity.newTime = event.params.newTime

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleApplicationsStartTimeUpdated(
  event: ApplicationsStartTimeUpdatedEvent
): void {
  let entity = new ApplicationsStartTimeUpdated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.oldTime = event.params.oldTime
  entity.newTime = event.params.newTime

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleInitialized(event: InitializedEvent): void {
  let entity = new Initialized(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.version = event.params.version

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleMatchAmountUpdated(event: MatchAmountUpdatedEvent): void {
  let entity = new MatchAmountUpdated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.newAmount = event.params.newAmount

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleNewProjectApplication(
  event: NewProjectApplicationEvent
): void {
  let entity = new NewProjectApplication(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.projectID = event.params.projectID
  entity.applicationIndex = event.params.applicationIndex
  entity.applicationMetaPtr_protocol = event.params.applicationMetaPtr.protocol
  entity.applicationMetaPtr_pointer = event.params.applicationMetaPtr.pointer

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handlePayFeeAndEscrowFundsToPayoutContract(
  event: PayFeeAndEscrowFundsToPayoutContractEvent
): void {
  let entity = new PayFeeAndEscrowFundsToPayoutContract(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.matchAmountAfterFees = event.params.matchAmountAfterFees
  entity.protocolFeeAmount = event.params.protocolFeeAmount
  entity.roundFeeAmount = event.params.roundFeeAmount

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleProjectsMetaPtrUpdated(
  event: ProjectsMetaPtrUpdatedEvent
): void {
  let entity = new ProjectsMetaPtrUpdated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.oldMetaPtr_protocol = event.params.oldMetaPtr.protocol
  entity.oldMetaPtr_pointer = event.params.oldMetaPtr.pointer
  entity.newMetaPtr_protocol = event.params.newMetaPtr.protocol
  entity.newMetaPtr_pointer = event.params.newMetaPtr.pointer

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleRoleAdminChanged(event: RoleAdminChangedEvent): void {
  let entity = new RoleAdminChanged(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.role = event.params.role
  entity.previousAdminRole = event.params.previousAdminRole
  entity.newAdminRole = event.params.newAdminRole

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleRoleGranted(event: RoleGrantedEvent): void {
  let entity = new RoleGranted(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.role = event.params.role
  entity.account = event.params.account
  entity.sender = event.params.sender

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleRoleRevoked(event: RoleRevokedEvent): void {
  let entity = new RoleRevoked(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.role = event.params.role
  entity.account = event.params.account
  entity.sender = event.params.sender

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleRoundEndTimeUpdated(
  event: RoundEndTimeUpdatedEvent
): void {
  let entity = new RoundEndTimeUpdated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.oldTime = event.params.oldTime
  entity.newTime = event.params.newTime

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleRoundFeeAddressUpdated(
  event: RoundFeeAddressUpdatedEvent
): void {
  let entity = new RoundFeeAddressUpdated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.roundFeeAddress = event.params.roundFeeAddress

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleRoundFeePercentageUpdated(
  event: RoundFeePercentageUpdatedEvent
): void {
  let entity = new RoundFeePercentageUpdated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.roundFeePercentage = event.params.roundFeePercentage

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleRoundMetaPtrUpdated(
  event: RoundMetaPtrUpdatedEvent
): void {
  let entity = new RoundMetaPtrUpdated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.oldMetaPtr_protocol = event.params.oldMetaPtr.protocol
  entity.oldMetaPtr_pointer = event.params.oldMetaPtr.pointer
  entity.newMetaPtr_protocol = event.params.newMetaPtr.protocol
  entity.newMetaPtr_pointer = event.params.newMetaPtr.pointer

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleRoundStartTimeUpdated(
  event: RoundStartTimeUpdatedEvent
): void {
  let entity = new RoundStartTimeUpdated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.oldTime = event.params.oldTime
  entity.newTime = event.params.newTime

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
