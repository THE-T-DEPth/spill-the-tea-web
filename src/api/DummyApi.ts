// src/API/dummyapi.ts

// 데이터
const mockUsers = [
	{ email: "user@example.com", certificationNumber: "123456", temporaryPassword: "Ab1@cDe2" },
	{ email: "ha@example.com", certificationNumber: "123123", temporaryPassword: "Ha@12345" },
	{ email: "test1@example.com", certificationNumber: "654321", temporaryPassword: "Test@1Ab" },
	{ email: "test2@example.com", certificationNumber: "111111", temporaryPassword: "Test@2Bc" },
	{ email: "sample@example.com", certificationNumber: "999999", temporaryPassword: "Sample#123" },
];

// 이메일 확인 API
export const verifyEmail = async (email: string): Promise<boolean> => {
	const user = mockUsers.find((user) => user.email === email);
	return !!user; // 이메일 존재 여부 반환
};

// 인증번호 확인 API
export const verifyCertificationNumber = async (
	email: string,
	certificationNumber: string
): Promise<boolean> => {
	const user = mockUsers.find(
		(user) => user.email === email && user.certificationNumber === certificationNumber
	);
	return !!user; // 인증번호 일치 여부 반환
};

// 임시 비밀번호 제공 API
export const fetchTemporaryPassword = async (email: string): Promise<string> => {
	const user = mockUsers.find((user) => user.email === email);
	return user?.temporaryPassword || "******"; // 임시 비밀번호 반환
};
