import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'titlecase'
})
export class TitlePipe implements PipeTransform {
    transform(value: string): string {
        if(!value) return null;
    
        let splitted = value.split(' ');
        splitted.forEach((val, index, arr)=>{
            if(index > 0 && this.isPreposition(val))
                arr[index] = val.toLowerCase();
            else
                arr[index] = this.toTitleCase(val);
            
        })
        return splitted.join(' ');
    }
    private isPreposition(word: string):boolean {
        let prepositions = ['of', 'the', 'in'];
        return prepositions.includes(word.toLowerCase());
    }
    private toTitleCase(word:string):string {
        return word.charAt(0).toUpperCase() + word.substr(1).toLowerCase();
    }
}