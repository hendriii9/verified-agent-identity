export const transactionSender = "0x8E2c7Ad767ACfA4d4353746E6C0E5Fa886a01C5D"; // relay sender address
export const verifierDid =
  "did:iden3:privado:main:2SZu1G6YDUtk9AAY6TZic24CcCYcZvtdyp1cQv9cig"; // should be the same as dashboard DID
export const callbackBase =
  "https://attestation-relay.internal-iden3-dev.com/api/v1/callback?attestation=";
export const walletAddress =
  "https://billions-wallet-dev.internal-iden3-dev.com";
export const verificationMessage =
  "Complete the verification to link your identity to the agent";
export const pairingReasonMessage = "agent_pairing:v1";
export const accept = [
  "iden3comm/v1;env=application/iden3-zkp-json;circuitId=authV2,authV3,authV3-8-32;alg=groth16",
];
export const nullifierSessionId = "240416041207230509012302";
export const pouScopeId = 1; // keccak256(nullifierSessionId)
export const pouAllowedIssuer = [
  "did:iden3:billions:main:2VvVPv3MGEjrcqnCcWxgrY5kWrQ8VbLjiDNUGqD3hw",
];
export const authScopeId = 2;
