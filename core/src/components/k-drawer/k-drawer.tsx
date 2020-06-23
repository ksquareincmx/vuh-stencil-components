import { Component, h, Prop, State, Listen } from '@stencil/core';
import clsx from 'clsx';

@Component({
  tag: 'k-drawer',
  styleUrl: 'k-drawer.scss',
  shadow: true
})
export class KDrawer {
  @State() body?: HTMLElement;
  @State() isOpen: boolean = false;
  @State() showSidenav: boolean = false;
  @Prop() forKey: string = 'key-menu';
  @Prop() userOptions?: boolean = true;

  componentWillRender() {
    this.body = document.querySelector('body');
  }

  @Listen('toggleMenu', { target: 'window' })
  toggleMenuHandler(event) {
    const { detail } = event;
    if (detail === this.forKey) {
      this.isOpen = true;
      setTimeout(() => {
        this.showSidenav = true;
      }, 100);
      this.body.style.overflow = 'hidden';
    }
  }

  @Listen('click')
  clickHandler() {
    this.body.style.overflow = 'auto';
    this.isOpen = false;
    this.showSidenav = false;
  }

  render() {
    return (
      <div
        class={clsx('KDrawer', {
          'KDrawer--is-opened': this.isOpen
        })}
      >
        <div
          class={clsx('KDrawer-sidenav', {
            'KDrawer-sidenav--is-opened': this.showSidenav
          })}
        >
          <div
            class={clsx('KDrawer-user', {
              'KDrawer-user--is-disabled': !this.userOptions
            })}
          >
            <div class="KDrawer-user-avatar">
              <k-avatar class="KMenu-user-avatar">
                <k-img
                  alt="Profile"
                  src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxISEBUQEBIVFRUVFQ8VFRUVEhAVDxUVFRUWFhUVFRUYHSggGBolHRUVITEhJSkrLi4uFx8zODMtNygtLisBCgoKBQUFDgUFDisZExkrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrK//AABEIAOEA4QMBIgACEQEDEQH/xAAbAAACAgMBAAAAAAAAAAAAAAAAAQIEAwUGB//EADoQAAIBAgQEBAMGBQMFAAAAAAABAgMRBAUhMQYSQVEiYXGBkaGxEyMyQuHwB1JictGSwvEUM0Oiwf/EABQBAQAAAAAAAAAAAAAAAAAAAAD/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwDyQQwABDABAMAAAAAAAAAAAADPRoNtKzu9UtEvd9DNVot2b5YxVkuifot2BSEXnOko28V+r5I3+f0JU6dOTtzN6N7Ri9PL9QKAFqphPFyx17dnpdq76lWwAAAAgGACGIAGAAACGIBgAAIYAACGAAIYgGAAAAAABbw0Yq0nG61/Na7tp8N/YryhZJvqrr/JkficVb2Wi+L6gZqMas34bpPRt35dNdZPoWMwxbUouNTmcVZpxXKpd46Wf6FavWnDwxfLFrZWd15v4laNNvbUCLlc2VHLJygpUld/md7Wf9L/AFKsaXJK1RbdN2vYyYnHuS5Y2S+enn2AtxnJN06qUtVfTlqR9NFdFLFWndx0tf3S6+pgnVb1bk3pq23p0JRqXertsnp072AwgSnG3yIsBDEMAAAAQwEAwECAYAIBgAAAAAAIBgIYAAidO11ciSjG6b7bgWsRXTTUrN7JrS3W/mtfkV+dtrySSRjSOj4c4fnUqxlOLUd9UBYyLhSVbx1NE+iL+b8L04R8CcX33j7r9TvMFh1CKirFieGjJWkgPFKWW1HJxjBS9k38ydfIay/J819D1itkkFJyhFJvfRamCplfcDyTG5fOlbnW/wAComes5nkkakbPdXPN84yx0qjjfRa9u/8AgDXfvYiMGAAAAAgABiAYCABgIAABgAAIYAAAAAAgGAFmnpF92vr5e5WMk5f/AADe8KYBVJzm1dQ2utP+dD0fL6kYxSdk7K/c4nB13hsuUofjnr/qenysaWlSqzlzTqyUpavV83rZbL5AevLEwX5l8SzRxMWtGeIYyM4P/u839tWMn/6tnU/w/wAzm6joyk31V23bugPRa2MhHd29SjLOaF7fax/1I5D+IHNpFN2e9r69l3/4OLwdCnKVqk1D1cvqk7AeuVcypTfJGpFt7aq79DhOOMPacJv8Mk0+ylHo/VP5GrllyulTnfrFqScXb+WS6/BnRYOnPFYSdCt+NN8snvdaxYHDTRGe5NJ6p6NXWvQjN7e4EQEADEMQAAAADEMBAAAAwAAAAAQwAAAAAz4PB1KsuSlFylZuytst3d6EcRh5wk4VIuMlupJpmTL7udo7uMrW3ulzKz9jfcR1qvJCniVecXFxqW/FH8yfnsB0WDy5TpRj0jGK12ukjTZtw5LnUvFJPdRXwOl4frqVNedjoqMFbYDz/LeGoPelU2abm0k77+HU3mR5bClWSjula71dlsr9TpqkUk2arJKDlNz82BDPcNGpNJ9rPo7PTdbbmgx/C0bq1NOKVtHLmS8kdHm8Gp83xNrh4JxT8kBwmT8L2l9paUV0T28m00dDPC8kUzeVUrGozKquVgeWcQR5cTUXTmcvLVJmunO51OD+xli6lXEJShFJWaum7a6dfTzNpUr1Hywp4OlSoVObR04c8l56aaAcCIlLd22u7a9BAAAIBgAAAAIAALAAwQAAAAgGgAAAAACzldXlrU5O1lON77Wbs/kzvOJclc5/ays0oyitdbtafvzPOTseHs1lWp/Y1aiko6NTWvL0aktXbzAnwbjtHTe6Z3eGrHneSqNPGVIxd1d216X/AFO4w1bWwGxxc3yP0Z5bg+Ia+HqTj0be99+6PQsxzGEI3nJRjrucdicTgKr1T1/Nez9QKdPOcVia8Wk2r2SV+VebPUsJdQiuyX0OMwGPwVKCivCls7pv1aRvcJnEJaQnGXo0wNjiKpzHE2N5abfc3uJraepxPFlbwagRyvKZ4ijH7PSaqfa362Wlvp7o6TinEqlQ56rakqdVRXV1JJRj9W/YWGdPDUIyhKCtCLcpOVve2616HA8R53PFVOaTvGOkVayt3t0+oGoSGIYAIYgAAGACGAAACABgIBgAAACGACGACJRk1qnZ+WggAuZZiXCopeep3WCzLxxfSSszgsvpc0pR7wfyaZtclx9pKE3az0A73GZXRrR+9jzdUm5WXwZrnlOHpJt4eE125U39Td4CmpxTT6FmeUQlu9+wHP0Mvw9VaYenBecIplvDZBhoeKnDlkr+JNr23NzSymEVvoiOIpximBocyxlny9Ejic8xTqykltFXfojYcS5ouZxpu729CrhcFy4WrUl+KUH8LMDQTryaUXJtLZNuy9jGMACwAAAAMAAAAAAQwCwhgAAIYAAAAAAAIYCAYhgBsMhX3yXdS+hmzjB8k7rqQ4cjfEL0k/odRmmB54fu4Gq4e4llQ8E7uPTujpqXGVPu/ged4mk4yaFGbA9FxHGUHs38zR5zxVKpHkhpfd/4OXcmWsDgJVHtp3AzZRgHVnd7Lc6bOKPLhppfyS+hcyXAKEdv8syZzS+6mu8ZaewHmICQIBgAAAAAAAAAAAAIBgABYAALgAgAYAAAA1FvYCIE1TN/wXgqNXEuFWPN4JSgm/C5Jq6a66N/ACvw1RkqqqNNRd4p93vp323O8nSurmDNsHyODS2lt5WehZw0roDjs8wfiukaqhhOZ2vZnc5rglJGihg9dgKNLLEvxO77I3uX0rJWRlwuFXb6s2FKhd22QF7BU7K5Wzb8LNlThyxNdj1fQDhM/wAinTk6lOLdNtvRXcPVdvM0Z7RhcNdfA0+dcE0a15Q+6n3ivA3/AFQ/xYDy8GX83ymph6rpTs2kn4XpZ7MoAIYAAAIYAAAACGIBiGIBiGCASGSUCa0AjCn3/UypAv3uCQEWzJg8VKjWhWh+KElJdvNe6uvci0RtfQD1mrWhiKNOvT/DJXXdPrF+ad17FVx5dTleCM6VKbw1V/d1H4W3pCp0fkpaL1t5nd1sI7bdwKV1JGqxHgd7F+MXGXK/0JV6N/MChSxq6K5tcE29WVYYZX2NlRp6ATrVehUVO8vUzRoOTLOHwj5tdgL+Cp2VizXnGEXObtGKcpPokldippI4b+JOf2j/ANFTesrSrW6R3jD30b8rdwOJzTHuvXqV3pzybS7R2ivaKRVkk9/QQwMTp9iFjMyMkBiGNxEAhsBAMQXAAGAASpwuzJbsRpSszNKIGOw7DY7AJjbIthcCTaMcguDAbjdHo3AfEv2qWFrS+8ivBJ/+SK6N/wAyXxS9TzYlCbi1ODakmmmtGmtmgPc6+EjLXr3MEsGupoeEuKViYqnUajWXTpUS/NHz7o6iAFNYFIz0aUdrFqpsUa1SwF2EIrsJxRrvt2afiHiWOFja6lVa8MP90rbL6gXeLeIo4OlaNpVpp8ke39cvJfNnktSpKUnOcnKUm229XJvVtksXip1purVk5Slq2/ouy8jC3cBrUnEimNMCTISJITAgRcSbQNAYmgMyiYWACGAACAcQBmWnPozEwYE5MakRkRAyMSY4yuiLAkFhDQCaEMQEoScWpRbTTTTTs01s0zveHOOE0qWLfLLZVUvC/wC9flfnt6HAAB7pF8yummnqmtU13T6lfEKMYuc5KMVvJu0V7s8kyvO8RhlajUcV/K7Sp+vK9EzBmGY1q8uatUlPtzPwr+2Oy9gOtz7jCEb08J4n1qteFf2R6+r09TiqtRyblJttu7bd235siMBMaQEkAhpAgYCuNuxEjJgT5hrcxji+oGaorIwVF1MincjLYDGIdgACUURJoCLGKbEA0AkxoCUB2EydrAJIB3FcBMQwAQxE0BFiuNiAB2BAgBIkCGACZJCkBG5BkmQbAAkIGBKmyTIRJyAhyATv+7ABBEkKPck/ICDESkRABpiBsDJFiIIkA0MiiSALAwuACGhMEAMB2BAADEA0SuKwmBK4mK5FsBsxskyIAAAA4mR7GNGSIELgSACMScQACMtiDEADQCABoYAA0MAAZEAAk9hRAAGJAAEmCGADiRfUYAQ6CYAAmJAACY0AANE0AAMAAD//2Q=="
                ></k-img>
              </k-avatar>
              <span>Eduardo Monforte</span>
            </div>
          </div>
          {!this.userOptions && <div class="KDrawer-space"></div>}
          <div class="KDrawer-items">
            <slot></slot>
          </div>
        </div>
      </div>
    );
  }
}
