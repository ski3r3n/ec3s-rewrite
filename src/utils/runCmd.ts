import { exec } from 'child_process';

export const runCmd = (cmd: string): Promise<string> => {
	return new Promise((resolve, reject) => {
		exec(cmd, (error, stdout, stderr) => {
			if (error) {
				reject(error);
				return;
			}
			if (stderr) {
				reject(stderr);
				return;
			}
			resolve(stdout.trim());
		});
	});
};
