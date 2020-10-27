import { Module } from '@nestjs/common';
import { EmployeeJobPostService } from './employee-job.service';
import { EmployeeJobPostController } from './employee-job.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Employee } from '../employee/employee.entity';
import { GauzyAIService } from '@gauzy/integration-ai';

@Module({
	imports: [TypeOrmModule.forFeature([Employee])],
	controllers: [EmployeeJobPostController],
	providers: [EmployeeJobPostService, GauzyAIService],
	exports: [EmployeeJobPostService]
})
export class EmployeeJobPostModule {}
