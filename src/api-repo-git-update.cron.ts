import { Injectable, Logger } from '@nestjs/common';
import { Cron } from '@nestjs/schedule';
import { execa } from 'execa';

@Injectable()
export class APIRepoGitUpdateCron {

  @Cron('*/5 * * * *')
  async unGitPullPeriodic() {

    const REPO_DIR = '/Users/hanzz/Documents/bruno/hans_API_collection';

    try {
      const { stdout } = await execa('git', ['-C', REPO_DIR, 'pull', '--ff-only']);
      console.log(stdout || 'Already up to date');
      return 'git pull completed';
    } catch (error) {
      console.log(error.stderr || error.message);
    }
  }
}