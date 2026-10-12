import { validateAllContent } from '../src/utils/contentValidator';

console.log('--- RUNNING CONTENT VALIDATION ---');
const report = validateAllContent();

console.log('Validation Summary:', JSON.stringify(report.summary, null, 2));

if (report.warnings.length > 0) {
  console.log(`\n⚠️ Warnings (${report.warnings.length}):`);
  report.warnings.forEach(w => console.log(' - ' + w));
}

if (!report.isValid) {
  console.error(`\n❌ Validation FAILED with ${report.errors.length} errors:`);
  report.errors.forEach(e => console.error(' - ' + e));
  process.exit(1);
} else {
  console.log('\n✅ All content passed validation with 0 errors!');
}
